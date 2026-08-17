function AmericanFlag() {
  const stripeHeight = 100 / 13

  return (
    <svg
      className="american-flag"
      viewBox="0 0 190 100"
      role="img"
      aria-label="United States flag"
    >
      <rect
        width="190"
        height="100"
        fill="#ffffff"
      />

      {Array.from({ length: 7 }).map(
        (_, index) => (
          <rect
            key={`stripe-${index}`}
            x="0"
            y={index * stripeHeight * 2}
            width="190"
            height={stripeHeight}
            fill="#b22234"
          />
        ),
      )}

      <rect
        x="0"
        y="0"
        width="76"
        height={stripeHeight * 7}
        fill="#3c3b6e"
      />

      {Array.from({ length: 9 }).flatMap(
        (_, row) => {
          const starCount =
            row % 2 === 0 ? 6 : 5

          const xStart =
            row % 2 === 0
              ? 6.4
              : 12.8

          return Array.from({
            length: starCount,
          }).map((__, column) => (
            <circle
              key={`star-${row}-${column}`}
              cx={
                xStart +
                column * 12.8
              }
              cy={
                4.4 +
                row * 5.8
              }
              r="1.15"
              fill="#ffffff"
            />
          ))
        },
      )}
    </svg>
  )
}

export default AmericanFlag