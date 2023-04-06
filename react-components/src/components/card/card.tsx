import { CardProps } from './types';

function Card({
  name,
  budgetInMillions,
  boxOfficeRevenueInMillions,
  rottenTomatoesScore,
  runtimeInMinutes,
  academyAwardWins,
  academyAwardNominations,
}: CardProps) {
  return (
    <div className="card-container">
      <div className="card-info-container">
        <div data-testid="card-header" className="card-header">
          {name}
        </div>
        <div className="budget">Budget: {budgetInMillions} millions</div>
        <div className="renevue">Box office revenue: {boxOfficeRevenueInMillions} millions</div>
        <div className="renevue">Rotten tomatoes score: {rottenTomatoesScore}</div>
        <div className="renevue">Runtime: {runtimeInMinutes}</div>
        <div className="renevue">Academy Award wins: {academyAwardWins}</div>
        <div className="renevue">Academy Award nominations: {academyAwardNominations}</div>
      </div>
    </div>
  );
}

export default Card;
