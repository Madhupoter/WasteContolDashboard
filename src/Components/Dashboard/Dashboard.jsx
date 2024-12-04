

import Navbar from '../Navbar'
import './Dashboard.css'
import Barchart from "./Barchart"
import LinechartTrend from "./LinechartTrend"
import PieChartToxicSubstances from "./PieChartToxicSubstances"
import ReductionlineChart from './ReductionlineChart'
import WasteCategoryPieChart from './WasteCategoryPieChart'
import FeeDistributionBarChart from './FeeDistributionBarChart'
import VolumeofWasteBarChart from './VolumeofWasteBarChart'
import EnergyConservedBar from './EnergyConservedBar'


const Dashboard = () => {
  return (
    <div>
        <Navbar/>
       <section className="dashboardChart">
       <div className="container-fluid">
        <div className="row">
            <div className="col-lg-12">
                <div className="text-center">
                    <div className="pageTitle">
                        <h2>Welcome To Our Dashboard</h2>
                    </div>
                </div>
            </div>
        </div>
         
            <div className="row">
                <div className="col-lg-6">
                    <div className="dashboardChartContent">
                        <div className="dashboardChartContent-text">
                            <h6>E-Waste Collection Jobs </h6>
                            <h2>100</h2>
                        </div>
                        <div className="dashboardChartContent-text">
                            <h6>Average disposal fee</h6>
                            <h2>27.0583</h2>
                        </div>
                    </div>
                    <br />
                    <Barchart/>
                </div>
                <div className="col-lg-6 d-flex align-items-end">
                    <LinechartTrend/>
                </div>
                <div className="col-lg-4">
                    <PieChartToxicSubstances/> 
                </div>
                <div className="col-lg-4"> 
                    <WasteCategoryPieChart/>
                </div>
                <div className="col-lg-4">
                    <ReductionlineChart/>
                </div>
                <div className="col-lg-4">
                    <FeeDistributionBarChart/>
                </div>
                <div className="col-lg-4">
                    <VolumeofWasteBarChart/>
                </div>
                <div className="col-lg-4">
                    <EnergyConservedBar/>
                </div>
            </div>
             
        </div>
       </section>
        
    </div>
  )
}

export default Dashboard