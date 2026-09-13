import { strengths } from '../../data/portfolioData'

function StrengthsSection() {
  return (
    <section className="strengths" aria-label="Technical strengths">
      {strengths.map((strength) => (
        <div className="strength" key={strength.label}>
          <p>{strength.label}</p>
          <strong>{strength.value}</strong>
        </div>
      ))}
    </section>
  )
}

export default StrengthsSection