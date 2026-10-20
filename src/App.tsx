import Hero from "./components/Hero";
import Methodology from "./components/Methodology";
import BayesModel from "./components/BayesModel";
import RoleCalculator from "./components/RoleCalculator";
import ResultsDashboard from "./components/ResultsDashboard";
import { CaseStudies, Glossary, Conclusion, Footer } from "./components/Closing";
export default function App() {
  return (<><Hero /><Methodology /><BayesModel /><RoleCalculator /><ResultsDashboard /><CaseStudies /><Glossary /><Conclusion /><Footer /></>);
}
