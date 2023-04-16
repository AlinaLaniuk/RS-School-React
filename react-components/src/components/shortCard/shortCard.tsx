export type ShortCardProps = {
  name: string;
  id: number;
  image: string;
};

export function ShortCard({ name, image }: ShortCardProps) {
  return (
    <div className="short-card-container">
      <div className="short-card-img-container">
        <img src={image} alt={name} />
      </div>
      <div className="card-info-container">
        <div data-testid="card-header" className="card-header">
          {name}
        </div>
      </div>
    </div>
  );
}
