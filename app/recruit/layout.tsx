export default function RecruitPageLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <>
        <main className="bg-white">{children}</main>
      </>
    </>
  );
}
``;
