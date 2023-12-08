export default function MovesLayout(props: {
    children: React.ReactNode;
    params: { moves: string; };
}) {
  return (
      <>{props.children}</>
  )
}
