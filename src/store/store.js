import { reactive, ref } from "vue";

// Store for what step user is on
export const store = reactive({
    step: 1,
});

// Store for personal info for validation
export const personalInfo = reactive({
    name: "",
    email: "",
    phone: "",
});

// Store for errors
export const errors = reactive({ errors: 0 });

// Store for selecting the plan
export const plan = reactive({
    plan: "",
    planLength: "Monthly",
    planCost: "",
    planNumber: "",
});

// Store for addons
export const addons = ref([]);

// Store for addons that are checked
export const checkStatus = ref(true);
