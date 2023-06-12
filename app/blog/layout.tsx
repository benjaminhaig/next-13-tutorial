export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (

        <main>
            <h2>Blog Layout</h2>
            {children}
        </main>

    )
}