import Sidebar from '@/components/sidebar';
import Content from '@/components/content/page';

export default function Home() {
    return (
        <div className="flex min-h-full max-w-full">
            <Sidebar />
            <main className="flex-1 bg-gray-100 p-4">
                <Content />
            </main>
        </div>
    );
}
