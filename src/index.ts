import Dashboard from "./dashboard/Dashboard.vue";

const useDashboard = {
    install: function (app: { component: (a: string, b: unknown) => void }) {
        app.component("Dashboard", Dashboard);
    },
};

export { Dashboard, useDashboard };