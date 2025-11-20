import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router';
import Routes from 'src/routing/Routes.tsx';

function App() {
    const queryClient = new QueryClient();

    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Routes />
            </QueryClientProvider>
        </BrowserRouter>
    );
}

export default App;
