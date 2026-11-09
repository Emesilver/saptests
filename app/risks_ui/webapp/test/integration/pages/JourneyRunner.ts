import JourneyRunner from "sap/fe/test/JourneyRunner";
import ListReport from "sap/fe/test/ListReport";
import ObjectPage from "sap/fe/test/ObjectPage";
import CustomRisksListGenerated from "./RisksList.gen";
import CustomRisksObjectPageGenerated from "./RisksObjectPage.gen";

const runner = new JourneyRunner({
    launchUrl: sap.ui.require.toUrl("risksui") + "/test/flp.html#app-preview",
    pages: {
        onTheRisksListGenerated: new ListReport(
            {
                appId: "risksui",
                componentId: "RisksList",
                entitySet: "",
                contextPath: "/Risks"
            },
            CustomRisksListGenerated
        ),
        onTheRisksObjectPageGenerated: new ObjectPage(
            {
                appId: "risksui",
                componentId: "RisksObjectPage",
                entitySet: "",
                contextPath: "/Risks"
            },
            CustomRisksObjectPageGenerated
        )
    },
    async: true
});

export default runner;
