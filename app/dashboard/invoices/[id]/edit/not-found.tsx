import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
    return (
        <main className="flex h-full flex-col items-center justify-center gap-2">
            <FaceFrownIcon className="w-10 text-gray-400" />
            <h2 className="text-xl font-semibold">404 Not Found</h2>
            <p>Could not find the requested invoice.</p>
            <Link
                href="/dashboard/invoices"
                className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
            >
                Go Back
            </Link>
        </main>
    );
}

// works against http://localhost:3001/dashboard/invoices/2e94d1ed-d220-449f-9f11-f0bbceed9645/edit
// fails against http://localhost:3001/dashboard/invoices/d180b475-7e3e-4237-9b54-8djjj380d50bcab/edit
// bad uuid format?