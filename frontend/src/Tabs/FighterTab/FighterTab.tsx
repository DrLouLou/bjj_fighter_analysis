import { useMemo } from "react";
import type { ColDef } from "@ag-grid-community/core";
import api from "@/api";
import AntdCard from "@/components/Antd/AntdCard";
import PageTitle from "@/components/AppLayout/PageTitle";
import AgGridWrapper from "@/components/ReactAgGrid/AgGridWrapper";
import {
  NUMBER_COLUMN,
  TEXT_COLUMN,
} from "@/components/ReactAgGrid/constants/ColDefConstants";
import { MatchData, HistoricalData, FighterData } from "./_models/_model";
import { useGetHistoricalDataQuery } from "./_redux/fighterDataApi";
import matchesData from './_data/matches.json';
import historicalData from './_data/historicalData.json';
import fightersData from './_data/fighters.json';


const FighterTab = () => {
  const typedMatchesData: MatchData[] = matchesData as MatchData[];
  const typedHistoricalData: HistoricalData[] = historicalData as HistoricalData[];
  const typedFightersData: FighterData[] = fightersData as FighterData[];

  const matchColumnDefs = useMemo<ColDef[]>(() => {
    return [
        { headerName: "ID", field: "id", hide: true },
        { headerName: "Fighter Name", field: "fighter_name" },
        { headerName: "Weight Class", field: "weight_class" },
        { headerName: "Team", field: "team" },
        { headerName: "Match ID", field: "match_id" },
        { headerName: "Opponent", field: "opponent" },
        { headerName: "Result", field: "result", cellRenderer: (params: any) => params.value === 'W' ? 'Win' : params.value === 'L' ? 'Loss' : 'Draw' },
        { headerName: "Method", field: "method" },
        { headerName: "Competition", field: "competition" },
        { headerName: "Weight", field: "weight" },
        { headerName: "Stage", field: "stage" },
        { headerName: "Year", field: "year" },
        { headerName: "Opponent ID", field: "opponent_id", hide: true }
    ];
  }, []);

  const historicalDataColumnDefs = useMemo<ColDef[]>(() => {
    return [
        { headerName: "Match ID", field: "id", hide: true },
        { headerName: "Winner ID", field: "winner_id", hide: true },
        { headerName: "Winner Name", field: "winner_name" },
        { headerName: "Loser ID", field: "loser_id" },
        { headerName: "Loser Name", field: "loser_name" },
        { headerName: "Win Type", field: "win_type" },
        { headerName: "Submission", field: "submission" },
        { headerName: "Winner Points", field: "winner_points" },
        { headerName: "Loser Points", field: "loser_points" },
        { headerName: "Adv/Pen", field: "adv_pen" },
        { headerName: "Weight Class", field: "weight_class" },
        { headerName: "Sex", field: "sex" },
        { headerName: "Stage", field: "stage" },
        { headerName: "Year", field: "year" },
    ];
  }, []);

  const fighterColumnDefs = useMemo<ColDef[]>(() => {
    return [
        { headerName: "ID", field: "id", hide: true },
        { headerName: "First Name", field: "first_name" },
        { headerName: "Last Name", field: "last_name" },
        { headerName: "Nickname", field: "nickname" },
    ];
  }, []);

  // const matchDataMock = useMemo<MatchData[]>(() => {
  //   return [
  //       { id: 1, fighter_name: "Aaron Michael Johnson", weight_class: "Super Pesado (100,50 kg / 222.0 lbs)", team: "Unity JJ", match_id: 7672, opponent: "Quentin Rosensweig", result: 'L', method: "Inside heel hook", competition: "Kakuto 5", weight: "ABS", stage: "SPF", year: 2015, opponent_id: 6438 },
  //       { id: 2, fighter_name: "Aaron Michael Johnson", weight_class: "Super Pesado (100,50 kg / 222.0 lbs)", team: "Unity JJ", match_id: 8190, opponent: "Neiman Gracie", result: 'L', method: "RNC", competition: "NoGi Pan Ams", weight: "94KG", stage: "SF", year: 2015, opponent_id: 4302 },
  //       { id: 3, fighter_name: "Aaron Michael Johnson", weight_class: "Super Pesado (100,50 kg / 222.0 lbs)", team: "Unity JJ", match_id: 8785, opponent: "Richie Martinez", result: 'L', method: "Heel hook", competition: "Kakuto Challenge", weight: "ABS", stage: "SF", year: 2015, opponent_id: 6531 },
  //       { id: 4, fighter_name: "Aaron Michael Johnson", weight_class: "Super Pesado (100,50 kg / 222.0 lbs)", team: "Unity JJ", match_id: 9059, opponent: "Leo Nogueira", result: 'L', method: "Points", competition: "Atlanta W. Open", weight: "94KG", stage: "SF", year: 2016, opponent_id: 1272 }
  //   ];
  // }, []);

  // const historicalDataMock = useMemo<HistoricalData[]>(() => {
  //   return [
  //     { match_id: 21871, winner_id: 2226, winner_name: "DeAlonzio Jackson", loser_id: 6836, loser_name: "John Combs", win_type: "POINTS", submission: 'N/A', winner_points: 5, loser_points: 0, adv_pen: "N/A", weight_class: "77KG", sex: "M", stage: "R1", year: "2019" },
  //     { match_id: 21871, winner_id: 2226, winner_name: "DeAlonzio Jackson", loser_id: 6836, loser_name: "John Combs", win_type: "POINTS", submission: 'N/A', winner_points: 5, loser_points: 0, adv_pen: "N/A", weight_class: "77KG", sex: "M", stage: "R1", year: "2019" },
  //     { match_id: 21871, winner_id: 2226, winner_name: "DeAlonzio Jackson", loser_id: 6836, loser_name: "John Combs", win_type: "POINTS", submission: 'N/A', winner_points: 5, loser_points: 0, adv_pen: "N/A", weight_class: "77KG", sex: "M", stage: "R1", year: "2019" },
  //     { match_id: 21871, winner_id: 2226, winner_name: "DeAlonzio Jackson", loser_id: 6836, loser_name: "John Combs", win_type: "POINTS", submission: 'N/A', winner_points: 5, loser_points: 0, adv_pen: "N/A", weight_class: "77KG", sex: "M", stage: "R1", year: "2019" },
  //     { match_id: 21871, winner_id: 2226, winner_name: "DeAlonzio Jackson", loser_id: 6836, loser_name: "John Combs", win_type: "POINTS", submission: 'N/A', winner_points: 5, loser_points: 0, adv_pen: "N/A", weight_class: "77KG", sex: "M", stage: "R1", year: "2019" },
  //     { match_id: 21871, winner_id: 2226, winner_name: "DeAlonzio Jackson", loser_id: 6836, loser_name: "John Combs", win_type: "POINTS", submission: 'N/A', winner_points: 5, loser_points: 0, adv_pen: "N/A", weight_class: "77KG", sex: "M", stage: "R1", year: "2019" },
  //     { match_id: 21871, winner_id: 2226, winner_name: "DeAlonzio Jackson", loser_id: 6836, loser_name: "John Combs", win_type: "POINTS", submission: 'N/A', winner_points: 5, loser_points: 0, adv_pen: "N/A", weight_class: "77KG", sex: "M", stage: "R1", year: "2019" },
  //     { match_id: 21871, winner_id: 2226, winner_name: "DeAlonzio Jackson", loser_id: 6836, loser_name: "John Combs", win_type: "POINTS", submission: 'N/A', winner_points: 5, loser_points: 0, adv_pen: "N/A", weight_class: "77KG", sex: "M", stage: "R1", year: "2019" },
  //     { match_id: 21871, winner_id: 2226, winner_name: "DeAlonzio Jackson", loser_id: 6836, loser_name: "John Combs", win_type: "POINTS", submission: 'N/A', winner_points: 5, loser_points: 0, adv_pen: "N/A", weight_class: "77KG", sex: "M", stage: "R1", year: "2019" },
  //     { match_id: 21871, winner_id: 2226, winner_name: "DeAlonzio Jackson", loser_id: 6836, loser_name: "John Combs", win_type: "POINTS", submission: 'N/A', winner_points: 5, loser_points: 0, adv_pen: "N/A", weight_class: "77KG", sex: "M", stage: "R1", year: "2019" },
  //     { match_id: 21871, winner_id: 2226, winner_name: "DeAlonzio Jackson", loser_id: 6836, loser_name: "John Combs", win_type: "POINTS", submission: 'N/A', winner_points: 5, loser_points: 0, adv_pen: "N/A", weight_class: "77KG", sex: "M", stage: "R1", year: "2019" },
  //     { match_id: 21871, winner_id: 2226, winner_name: "DeAlonzio Jackson", loser_id: 6836, loser_name: "John Combs", win_type: "POINTS", submission: 'N/A', winner_points: 5, loser_points: 0, adv_pen: "N/A", weight_class: "77KG", sex: "M", stage: "R1", year: "2019" }
  //   ];
  // }, []);

  // const fighterDataMock = useMemo<FighterData[]>(() => {
  //   return [
  //       { id: 8141, first_name: "Aarae", last_name: "Alexander", nickname: "Rocket", team: "Team Lloyd Irvin" },
  //       { id: 8141, first_name: "Aarae", last_name: "Alexander", nickname: "Rocket", team: "Team Lloyd Irvin" },
  //       { id: 8141, first_name: "Aarae", last_name: "Alexander", nickname: "Rocket", team: "Team Lloyd Irvin" },
  //       { id: 8141, first_name: "Aarae", last_name: "Alexander", nickname: "Rocket", team: "Team Lloyd Irvin" },
  //       { id: 8141, first_name: "Aarae", last_name: "Alexander", nickname: "Rocket", team: "Team Lloyd Irvin" },
  //       { id: 8141, first_name: "Aarae", last_name: "Alexander", nickname: "Rocket", team: "Team Lloyd Irvin" },
  //       { id: 8141, first_name: "Aarae", last_name: "Alexander", nickname: "Rocket", team: "Team Lloyd Irvin" },
  //   ];
  // }, []);

  const { data } = useGetHistoricalDataQuery({});
  console.log("historical data: ", data);

  return (
    <div className="h-full flex flex-col gap-4">
      <PageTitle label="Home" />
      <AntdCard
        className="h-[45vh]"
        styles={{ body: { height: "calc(100% - 56px)", padding: 0 } }}
        title="Matches"
      >
        <AgGridWrapper
          rootClassName="h-full"
          columnDefs={matchColumnDefs}
          rowData={typedMatchesData}
          suppressAggFuncInHeader
          autoSizeStrategy={{ type: "fitCellContents", skipHeader: false }}
          defaultColDef={{
            width: 120,
            minWidth: 90,
            filter: "agTextColumnFilter",
            menuTabs: ["filterMenuTab"],
          }}
          autoGroupColumnDef={{
            width: 200,
            minWidth: 200,
            headerName: "Client Name",
          }}
          rowSelection="single"
        />
      </AntdCard>

      <AntdCard
        className="h-[45vh]"
        styles={{ body: { height: "calc(100% - 56px)", padding: 0 } }}
        title="Historical Data"
      >
        <AgGridWrapper
          rootClassName="h-full"
          columnDefs={historicalDataColumnDefs}
          rowData={typedHistoricalData}
          suppressAggFuncInHeader
          autoSizeStrategy={{ type: "fitCellContents", skipHeader: false }}
          defaultColDef={{
            width: 120,
            minWidth: 90,
            filter: "agTextColumnFilter",
            menuTabs: ["filterMenuTab"],
          }}
          autoGroupColumnDef={{
            width: 200,
            minWidth: 200,
            headerName: "Client Name",
          }}
          rowSelection="single"
        />
      </AntdCard>

      <AntdCard
        className="h-[45vh]"
        styles={{ body: { height: "calc(100% - 56px)", padding: 0 } }}
        title="Fighters"
      >
        <AgGridWrapper
          rootClassName="h-full"
          columnDefs={fighterColumnDefs}
          rowData={typedFightersData}
          suppressAggFuncInHeader
          autoSizeStrategy={{ type: "fitCellContents", skipHeader: false }}
          defaultColDef={{
            width: 120,
            minWidth: 90,
            filter: "agTextColumnFilter",
            menuTabs: ["filterMenuTab"],
          }}
          autoGroupColumnDef={{
            width: 200,
            minWidth: 200,
            headerName: "Client Name",
          }}
          rowSelection="single"
        />
      </AntdCard>

      
    </div>
  );
};

export default FighterTab;
