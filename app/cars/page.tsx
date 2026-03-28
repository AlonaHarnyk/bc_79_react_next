import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import {getCars} from "@/lib/carApi";
import CarsClient from "@/app/cars/Cars.client";


export default async function CarsPage() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["cars"],
        queryFn: getCars
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <CarsClient/>
        </HydrationBoundary>
    );
}