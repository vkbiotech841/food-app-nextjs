'use client';

// Note: Error page will be a client component because next js makes sure error can occure eight at the server side or from the client side and both need to be detactable. 


export default function Error() {
    return <main className="error">
        <h1>An error occured!</h1>
        <p>Failed to fetch meal data. Please try again later.</p>
    </main>
}