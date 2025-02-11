import { FC } from "react";
import { Avatar } from "@/components/ui";
import Link from "next/link";
import "./styles.css";

type Props = {
  data: Entity.Character | null;
};

const CharacterCard: FC<Props> = ({ data }) => {
  if (!data) {
    return (
      <div role="card" className="fa-character-card empty">
        <div className="card-body"></div>
      </div>
    );
  }
  const url = data?.url || "";
  const matchId = url.match(/\/(\d+)/);
  const id = matchId ? matchId[1] : 1;

  return (
    <Link href={`/character/${id}`}>
      <div role="card" className="fa-character-card not-empty">
        <div className="card-body">
          <Avatar />
          {data && (
            <>
              <h2 className="card-title text-primary">{data.name}</h2>
              <p>Birth: {data.birth_year}</p>
              <p>Height: {data.height}</p>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CharacterCard;
