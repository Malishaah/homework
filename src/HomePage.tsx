import { useQuery } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { fetchImages, Photo } from "./api";

export default function HomePage() {
  const { data } = useQuery<Photo[]>({
    queryKey: ["images"],
    queryFn: fetchImages,
  });

  return (
    <main>
      <h2>Home Page</h2>
      <div className="flex gap-2">
        <Button className="text-green-600">Hello</Button>
        <Button className="text-red-600">Hi</Button>
        <Button className="text-purple-600">Hola</Button>
      </div>
      <div>
        {data?.map((image) => (
          <img key={image.id} src={image.src.original}></img>
        ))}
      </div>
    </main>
  );
}

interface Props extends PropsWithChildren {
  className: string;
}

function Button(props: Props) {
  return (
    <button className={"px-4 py-2 bg-slate-300 rounded " + props.className}>
      {props.children}
    </button>
  );
}
