import {
  Suspense,
  createElement,
  type ComponentType,
  type ReactNode,
} from "react";
import { matchPath, Route, Routes } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import CustomCursor from "@/components/CustomCursor";

type RouteModule = { default: ComponentType };
type PreloadableComponent = ComponentType & { preload: () => Promise<void> };

const createPreloadableRoute = (
  loader: () => Promise<RouteModule>,
): PreloadableComponent => {
  let module: RouteModule | undefined;
  let loading: Promise<void> | undefined;

  const preload = () => {
    loading ??= loader().then((loadedModule) => {
      module = loadedModule;
    });
    return loading;
  };

  const PreloadableRoute = () => {
    if (!module) {
      throw preload();
    }
    return createElement(module.default);
  };

  PreloadableRoute.preload = preload;
  return PreloadableRoute;
};

const Index = createPreloadableRoute(() => import("@/pages/Index"));
const About = createPreloadableRoute(() => import("@/pages/About"));
const Contact = createPreloadableRoute(() => import("@/pages/Contact"));
const QuestionDrills = createPreloadableRoute(() => import("@/pages/QuestionDrills"));
const Practice = createPreloadableRoute(() => import("@/pages/Practice"));
const Classroom = createPreloadableRoute(() => import("@/pages/Classroom"));
const IOS = createPreloadableRoute(() => import("@/pages/IOS"));
const Lite = createPreloadableRoute(() => import("@/pages/Lite"));
const VetDetails = createPreloadableRoute(() => import("@/pages/VetDetails"));
const FtleDetails = createPreloadableRoute(() => import("@/pages/FtleDetails"));
const FisheriesDetails = createPreloadableRoute(() => import("@/pages/FisheriesDetails"));
const AbeDetails = createPreloadableRoute(() => import("@/pages/AbeDetails"));
const AgricultureDetails = createPreloadableRoute(() => import("@/pages/AgricultureDetails"));
const Press = createPreloadableRoute(() => import("@/pages/Press"));
const PressArticle = createPreloadableRoute(() => import("@/pages/PressArticle"));
const PreRegister = createPreloadableRoute(() => import("@/pages/PreRegister"));
const ReviewClass = createPreloadableRoute(() => import("@/pages/ReviewClass"));
const Products = createPreloadableRoute(() => import("@/pages/Products"));
const CheckYourEmail = createPreloadableRoute(() => import("@/pages/CheckYourEmail"));
const SubscriptionConfirmed = createPreloadableRoute(
  () => import("@/pages/SubscriptionConfirmed"),
);
const ApiEndpoints = createPreloadableRoute(() => import("@/pages/ApiEndpoints"));
const SearchPage = createPreloadableRoute(() => import("@/pages/Search"));
const NotFound = createPreloadableRoute(() => import("@/pages/NotFound"));

const routeModules = [
  { path: "/", component: Index },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/question-drills", component: QuestionDrills },
  { path: "/practice", component: Practice },
  { path: "/classroom", component: Classroom },
  { path: "/ios", component: IOS },
  { path: "/lite", component: Lite },
  { path: "/review/vet", component: VetDetails },
  { path: "/review/ftle", component: FtleDetails },
  { path: "/review/fisheries", component: FisheriesDetails },
  { path: "/review/abe", component: AbeDetails },
  { path: "/review/agriculture", component: AgricultureDetails },
  { path: "/press", component: Press },
  { path: "/press/:id", component: PressArticle },
  { path: "/enroll", component: PreRegister },
  { path: "/review-class", component: ReviewClass },
  { path: "/our-products", component: Products },
  { path: "/check-your-email", component: CheckYourEmail },
  { path: "/subscription-confirmed", component: SubscriptionConfirmed },
  { path: "/api-endpoints", component: ApiEndpoints },
  { path: "/search", component: SearchPage },
] as const;

/** Load the current route before hydration so prerendered markup is preserved. */
export const preloadCurrentRoute = async (pathname: string) => {
  const route = routeModules.find(({ path }) =>
    matchPath({ path, end: true }, pathname),
  );
  await (route?.component ?? NotFound).preload();
};

const RouteFallback = (): ReactNode => (
  <div className="min-h-screen bg-background" aria-busy="true" />
);

export const ClientAppRoutes = () => (
  <>
    <ScrollToTop />
    <CustomCursor />
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        {routeModules.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </>
);
