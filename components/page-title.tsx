export default function PageTitle({
    title
}: {
    title: string
}) {
  return (
    <h1 className="text-4xl font-bold text-center mb-10">
        {title}
    </h1>
  )
}
