import { reactive } from "vue";

export const store = reactive({

    buttonJumbotron: [
        {
            title: "FACEBOOK",
            alt: "icona facebook",
            icon: "./assets/facebook.png",
            css: "facebook"
        },
        {
            title: "GOOGLE",
            alt: "icona google",
            icon: "./assets/google-logo.png",
            css: "google"
        },
        {
            title: "ACCEDI CON APPLE",
            alt: "icona apple",
            icon: "./assets/apple-logo.png",
            css: "apple"
        },
    ]

});