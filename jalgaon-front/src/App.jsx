import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
// import Historyofdistrict from "./pages/About_District/History";
import OrganizationalChart from "./pages/About_District/OrganizationalChart";
// import Objectives from "./pages/About_District/Objectives";
import KeyResponsibilities from "./pages/Functions/KeyResponsibilities";
import RolewiseDuties from "./pages/Functions/RolewiseDuties";
// import DistrictAnnualPlan from "./pages/Schemes/DistrictAnnualPlan";
// import MLAFunds from "./pages/Schemes/MLAFunds";
// import MPFunds from "./pages/Schemes/MPFunds";
// import SpecialSchemes from "./pages/Schemes/SpecialSchemes";
// import OngoingProjects from "./pages/Projects/OngoingProjects";
// import ApprovalProcess from "./pages/Projects/ApprovalProcess";
// import BudgetExpenditure from "./pages/Transparency/BudgetExpenditure";
import RTIPortal from "./pages/Transparency/RTIPortal";
import Directory from "./pages/Contact/Directory";
import GalleryPage from "./pages/Media/Photos";
// import PresentationGallery from "./pages/Media/Presentation";
// import BlogPage from "./pages/Blogpage/BlogPage";
// import BlogDetailPage from "./pages/Blogpage/BlogDetailPage";
import ReportsPage from "./pages/Reports/ReportsPage";
import Download from "./pages/Downloads/Downloads";
import TourismMain from "./pages/Tourism/Tourism";
import TourismDetail from "./pages/Tourism/TourismDetail";
// import MinoritySchemes from "./pages/Schemes/MinoritySchemes";
// import AreaDevelop from "./pages/Schemes/AreaDevelop";
import DPC from "./pages/DPC/DPC";
import AllUpdates from "./pages/Home/AllUpdates";
import UpdateDetails from "./pages/Home/UpdateDetails";
import DistrictPlanningDashboard from "./pages/DSP/DSP";
// import SchemesPage from "./pages/Schemes/SchemesPage";
import DistrictPlanningCommittee from "./pages/Committees/DistrictPlanningCommittee";
// import Projectdetail from "./pages/Projectpage/Projectdetail";
import Projectpage from "./pages/Projectpage/Projectpage";
// import ProjectDetail from "./pages/Projectpage/ProjectDetail";
import Projectdetail from "./pages/Projectpage/Projectdetail";
import Schemepage from "./pages/Schemepage/Schemepage";
import Schemedetail from "./pages/Schemepage/Schemedetail";
// import GRDirectory from "./pages/GR/GRDirectory";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="/history" element={<Historyofdistrict />} /> */}
          <Route
            path="/organizationalChart"
            element={<OrganizationalChart />}
          />
          {/* <Route path="/schemes" element={<SchemesPage />} /> */}
          {/* <Route path="/objectives" element={<Objectives />} /> */}
          <Route path="/responsibilities" element={<KeyResponsibilities />} />
          <Route path="/rolewiseduties" element={<RolewiseDuties />} />
          {/* <Route path="/annual-plan" element={<DistrictAnnualPlan />} /> */}
          {/* <Route path="/MLAFunds" element={<MLAFunds />} /> */}
          {/* <Route path="/MPFunds" element={<MPFunds />} /> */}
          {/* <Route path="/spacialfunds" element={<SpecialSchemes />} /> */}
          {/* <Route path="/ongoingprojects" element={<OngoingProjects />} /> */}
          {/* <Route path="/approvalprocess" element={<ApprovalProcess />} /> */}
          <Route
            path="/planningcommittee"
            element={<DistrictPlanningCommittee />}
          />
          {/* <Route
            path="/executivecommittee"
            element={<DistrictPlanningCommittee />}
          /> */}
          {/* <Route path="/budgetexpenditure" element={<BudgetExpenditure />} /> */}
          <Route path="/rti-portal" element={<RTIPortal />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/gallery" element={<GalleryPage />} />
          {/* <Route path="/presentation" element={<PresentationGallery />} /> */}
          {/* <Route path="/blog" element={<BlogPage />} /> */}
          {/* <Route path="/blog/:slug" element={<BlogDetailPage />} /> */}
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/downloads" element={<Download />} />
          <Route path="tourism" element={<TourismMain />} />
          <Route path="tourism/:slug" element={<TourismDetail />} />
          {/* <Route path="minority-scheme" element={<MinoritySchemes />} /> */}
          {/* <Route path="area-develop" element={<AreaDevelop />} /> */}
          <Route path="dpc" element={<DPC />} />
          <Route path="updates" element={<AllUpdates />} />
          <Route path="/updates/:id" element={<UpdateDetails />} />
          <Route path="/dsp" element={<DistrictPlanningDashboard />} />
          {/* <Route path="/project" element={<Projectpage />} />
              <Route path="/project/:projectSlug" element={<Projectdetail />} /> */}
          <Route path="/scheme" element={<Schemepage />} />
          <Route path="/scheme/:schemeSlug" element={<Schemedetail />} />
          {/* <Route path="/gr" element={<GRDirectory />} /> */}
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
