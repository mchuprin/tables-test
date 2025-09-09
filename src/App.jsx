import { useState } from 'react'
import './App.css'
import CreateTable from "./features/CreateTable/CreateTable.tsx";
import {useSelector} from "react-redux";

function App() {
  const tables = useSelector((state) => state.table)
  return (
    <>
      <CreateTable />

      <TablesWrapper />
    </>
  )
}

export default App
