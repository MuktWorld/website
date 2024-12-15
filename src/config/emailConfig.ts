interface EmailConfig {
    emailJsPublicKey: string;
    emailJsServiceId: string;
    emailJsTemplateId: string;
}

const emailConfig: EmailConfig = {
    emailJsPublicKey: String(import.meta.env.VITE_EMAILJS_PUBLIC_KEY),
    emailJsServiceId: String(import.meta.env.VITE_EMAILJS_SERVICE_ID),
    emailJsTemplateId: String(import.meta.env.VITE_EMAILJS_TEMPLATE_ID),
};

export default emailConfig;
