import artwork_data from "../../resources/artwork_data";
import non_profits_data from "../../resources/non_profits_data";
import kids_data from "../../resources/kids_data";
import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ArtworkFilter({ lang, setArtworkResults }) {
  const [filter, updateFilter] = useState({
    category: new Map(),
    non_profit: new Map(),
    kids: new Map(),
  });

  // if artist name provided through state, then set initialArtist to that value
  const { state } = useLocation();
  const { state_artist_name: initialArtist } = state || {};

  const options = {
    category: new Map(),
    non_profit: new Map(),
    kids: new Map(),
  };

  const getNonProfitObject = useCallback(
    (non_profit_id) =>
      non_profits_data[lang].collection.find(
        (non_profit) => non_profit.id === non_profit_id
      ),
    [lang]
  );

  const getKidsObject = useCallback(
    (kid_id) => kids_data[lang].collection.find((kid) => kid.id === kid_id),
    [lang]
  );

  function getFilterOptions() {
    artwork_data[lang].collection.forEach((artwork) => {
      if (artwork.category) {
        options.category.set(artwork.category, false);
      }
      if (artwork.ngo_id) {
        options.non_profit.set(getNonProfitObject(artwork.ngo_id).name, false);
      }
      if (artwork.artwork_artist_id) {
        options.kids.set(getKidsObject(artwork.artwork_artist_id).name, false);
      }
    });
  }

  function setCategory(category) {
    let nFilter = filter;
    // if category is in 'filter' remove it, else add it
    if (nFilter.category.has(category)) {
      nFilter.category.delete(category);
    } else {
      nFilter.category.set(category, false);
    }
    updateFilter(nFilter);
    updateResults();
  }

  function setNonProfit(non_profit) {
    // if non_profit is in 'filter' remove it, else add it
    let nFilter = filter;
    if (nFilter.non_profit.has(non_profit)) {
      nFilter.non_profit.delete(non_profit);
    } else {
      nFilter.non_profit.set(non_profit, false);
    }
    updateFilter(nFilter);
    updateResults();
  }

  function setKids(kid) {
    // if kid is in 'filter' remove it, else add it
    let nFilter = filter;
    if (nFilter.kids.has(kid)) {
      nFilter.kids.delete(kid);
    } else {
      nFilter.kids.set(kid, false);
    }
    updateFilter(nFilter);
    updateResults();
  }

  const updateResults = useCallback(() => {
    // remove items from artwork_results that are not in filter
    setArtworkResults(
      artwork_data[lang].collection.filter((artwork) => {
        // if filter.category, filter.non_profit and filter.kids are empty
        // then return all results
        if (
          filter.category.size === 0 &&
          filter.non_profit.size === 0 &&
          filter.kids.size === 0
        ) {
          return true;
        }

        // if filter.category is not empty, but filter.non_profit and filter.kids are empty
        // then only filter by category
        if (
          filter.category.size > 0 &&
          filter.non_profit.size === 0 &&
          filter.kids.size === 0
        ) {
          if (filter.category.has(artwork.category)) {
            return true;
          } else {
            return false;
          }
        }

        // if filter.non_profit is not empty, but filter.category and filter.kids are empty
        // then only filter by non_profit
        if (
          filter.non_profit.size > 0 &&
          filter.category.size === 0 &&
          filter.kids.size === 0
        ) {
          if (filter.non_profit.has(getNonProfitObject(artwork.ngo_id).name)) {
            return true;
          } else {
            return false;
          }
        }

        // if filter.kids is not empty, but filter.category and filter.non_profit are empty
        // then only filter by kids
        if (
          filter.kids.size > 0 &&
          filter.category.size === 0 &&
          filter.non_profit.size === 0
        ) {
          if (filter.kids.has(getKidsObject(artwork.artwork_artist_id).name)) {
            return true;
          } else {
            return false;
          }
        }

        // if filter.category and filter.non_profit are not empty, but filter.kids is empty
        // then filter by category and non_profit
        if (
          filter.category.size > 0 &&
          filter.non_profit.size > 0 &&
          filter.kids.size === 0
        ) {
          if (
            filter.category.has(artwork.category) &&
            filter.non_profit.has(getNonProfitObject(artwork.ngo_id).name)
          ) {
            return true;
          } else {
            return false;
          }
        }

        // if filter.category and filter.kids are not empty, but filter.non_profit is empty
        // then filter by category and kids
        if (
          filter.category.size > 0 &&
          filter.non_profit.size === 0 &&
          filter.kids.size > 0
        ) {
          if (
            filter.category.has(artwork.category) &&
            filter.kids.has(getKidsObject(artwork.artwork_artist_id).name)
          ) {
            return true;
          } else {
            return false;
          }
        }

        // if filter.non_profit and filter.kids are not empty, but filter.category is empty
        // then filter by non_profit and kids
        if (
          filter.category.size === 0 &&
          filter.non_profit.size > 0 &&
          filter.kids.size > 0
        ) {
          if (
            filter.non_profit.has(getNonProfitObject(artwork.ngo_id).name) &&
            filter.kids.has(getKidsObject(artwork.artwork_artist_id).name)
          ) {
            return true;
          } else {
            return false;
          }
        }

        // if filter.category, filter.non_profit and filter.kids are not empty
        // then filter by category, non_profit and kids
        if (
          filter.category.size > 0 &&
          filter.non_profit.size > 0 &&
          filter.kids.size > 0
        ) {
          if (
            filter.category.has(artwork.category) &&
            filter.non_profit.has(getNonProfitObject(artwork.ngo_id).name) &&
            filter.kids.has(getKidsObject(artwork.artwork_artist_id).name)
          ) {
            return true;
          } else {
            return false;
          }
        }

        return false;
      })
    );
  }, [filter, lang, setArtworkResults, getNonProfitObject, getKidsObject]);

  getFilterOptions();

  // use useEffects to update filter if we have a value for initialArtist
  useEffect(() => {
    if (initialArtist) {
      let nFilter = filter;
      nFilter.kids.set(initialArtist, false);
      updateFilter(nFilter);
      updateResults();
    }
  }, [initialArtist, filter, updateFilter, updateResults]);

  // console.log(options);

  return (
    <div
      id="artwork-filter-container"
      className="container d-flex flex-column my-2"
    >
      <div className="fs-5 fw-bold mb-3">Filter</div>
      <div className="container d-flex flex-column">
        <span className="fw-bold">Category</span>
        {Array.from(options.category.keys()).map((category, index) => (
          <div className="form-check" key={index}>
            <input
              className="form-check-input"
              type="checkbox"
              value={category}
              id={category}
              onClick={() => setCategory(category)}
              // if value is in filter, then check the checkbox
              checked={filter.category.has(category)}
            />
            <label className="form-check-label" htmlFor={category}>
              {category}
            </label>
          </div>
        ))}
      </div>
      <div className="container d-flex flex-column my-2">
        <span className="fw-bold">Non-Profits</span>
        {Array.from(options.non_profit.keys()).map((non_profit, index) => (
          <div className="form-check" key={index}>
            <input
              className="form-check-input"
              type="checkbox"
              value={non_profit}
              id={non_profit}
              onClick={() => setNonProfit(non_profit)}
              // if value is in filter, then check the checkbox
              checked={filter.non_profit.has(non_profit)}
            />
            <label className="form-check-label" htmlFor={non_profit}>
              {non_profit}
            </label>
          </div>
        ))}
      </div>
      <div className="container d-flex flex-column my-2">
        <span className="fw-bold">Artist</span>
        {Array.from(options.kids.keys()).map((kid, index) => (
          <div className="form-check" key={index}>
            <input
              className="form-check-input"
              type="checkbox"
              value={kid}
              id={kid}
              onClick={() => setKids(kid)}
              // if kid value same as initialArtist, or
              // if the value is in filter, then check the checkbox
              checked={filter.kids.has(kid) || kid === initialArtist}
            />
            <label className="form-check-label" htmlFor={kid}>
              {kid}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
