function HighlightedStat({ thisStat, otherStat }) {
  const thisLeader = thisStat > otherStat;
  return (
    <h3
      className={`my-4 text-center text-2xl ${
        thisLeader ? "bg-yellow-200 underline decoration-sky-500" : ""
      }`}
    >
      {thisStat}
    </h3>
  );
}

export default function HighlightedSectStat({ thisPlayer, otherPlayer }) {
  // thisPoints, thisRebounds, (thiAssists = scrapeStats(thisPlayer.name));

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-center text-2xl underline">{thisPlayer.name}</h2>
      <h3 className="my-4 text-center text-2xl">
        {thisPlayer && thisPlayer.Year}
      </h3>
      <HighlightedStat
        thisStat={thisPlayer.points}
        otherStat={otherPlayer.points}
      />
      <HighlightedStat
        thisStat={thisPlayer.rebounds}
        otherStat={otherPlayer.rebounds}
      />
      <HighlightedStat
        thisStat={thisPlayer.assists}
        otherStat={otherPlayer.assists}
      />
      {/* <HighlightedStat thisStat={thisPlayer.BLK} otherStat={otherPlayer.BLK} />
      <HighlightedStat thisStat={thisPlayer.STL} otherStat={otherPlayer.STL} /> */}
    </div>
  );
}
