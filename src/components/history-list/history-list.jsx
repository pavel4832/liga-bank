import React from 'react';
import {clearHistory} from "../../store/actions";
import {useDispatch, useSelector} from "react-redux";
import {RESULTS_LENGTH} from "../../const";

const HistoryList = () => {
  const {historyRecords} = useSelector((state) => state.DATA);
  const firstResultArray = historyRecords.slice(0, RESULTS_LENGTH);
  const secondResultArray = historyRecords.slice(RESULTS_LENGTH);

  const dispatch = useDispatch();

  return (
    <section className="page-main__history history-data">
      <div className="history-data__wrapper">
        <h2 className="history-data__title">История конвертация</h2>
        <div className="history-data__board">
          <div className="history-data__column history-data__column--left">
            <ul className="history-data__list">
              {firstResultArray.map((result, index) => (
                <React.Fragment key={`comment-${index}`}>
                  <li className="history-data__item">
                    <p className="history-data__date">{result.date}</p>
                    <p className="history-data__change">{result.amountHave}
                      <span className="history-data__currency">{result.currencyHave}</span>
                    </p>
                    <span className="history-data__icon"></span>
                    <p className="history-data__got">{result.amountGet}
                      <span className="history-data__currency">{result.currencyGet}</span>
                    </p>
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </div>
          <span className="history-data__line"></span>
          <div className="history-data__column history-data__column--right">
            <ul className="history-data__list">
              {secondResultArray.map((result, index) => (
                <React.Fragment key={`comment-${index}`}>
                  <li className="history-data__item">
                    <p className="history-data__date">{result.date}</p>
                    <p className="history-data__change">{result.amountHave}
                      <span className="history-data__currency">{result.currencyHave}</span>
                    </p>
                    <span className="history-data__icon"></span>
                    <p className="history-data__got">{result.amountGet}
                      <span className="history-data__currency">{result.currencyGet}</span>
                    </p>
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </div>
          <button
            className="history-data__reset button"
            onClick={() => {
              dispatch(clearHistory());
            }}
          >
            Очистить историю
          </button>
        </div>
      </div>
    </section>
  );
};

export default HistoryList;
