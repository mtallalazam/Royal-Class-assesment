import ClientPageComponent from "@/components/ClientPageComponent";
import ClientQueryProvider from "@/components/ClientQueryProvider";

const ClientPage = () => {
    return (
        <>
            <h2>Client Side Data Fetching</h2>
            <ClientQueryProvider>
                <ClientPageComponent />
            </ClientQueryProvider>
        </>
    );
};

export default ClientPage;
