import React, { useEffect, useState } from 'react';
import { StyledForm, StyledTable, StyledTableContainer, StyledTableTitle } from './History.styles';
import { useSelector } from 'react-redux';
import { usePageRestClient } from '../../pageRestClient';
import { RootState } from '../../redux/types/root.state';
import { History } from '../../types/History';

interface HistoryListProps {}

export const HistoryList: React.FC<HistoryListProps> = () => {
    const user = useSelector((state: RootState) => state.user.user);
    const restClient = usePageRestClient(user.id);
    const [history, setHistory] = useState<History[]>([]);
    useEffect(() => {
        restClient.history().then((data) => {
            setHistory(data);
        });
    }, []);

    return (
        <StyledForm>
            <StyledTable>
                <StyledTableTitle>{`${user.username}'s History`}</StyledTableTitle>
                {history.length
                    ? history.map((historyElement) => {
                          return (
                              <StyledTableContainer key={historyElement.id}>
                                  {historyElement.query}
                              </StyledTableContainer>
                          );
                      })
                    : null}
            </StyledTable>
        </StyledForm>
    );
};
