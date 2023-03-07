import { Box, Heading, ModalBody, useStyleConfig } from "@chakra-ui/react"
import { useCallback, useLayoutEffect, useState } from "react"

import { ContinueButton } from "../../components/ContinueButton"
import type { RawData } from "../../types"
import { SelectHeaderTable } from "./components/SelectHeaderTable"
import type { themeOverrides } from "../../theme"
import { useRsi } from "../../hooks/useRsi"

type SelectHeaderProps = {
  data: RawData[]
  onContinue: (headerValues: RawData, data: RawData[]) => Promise<void>
}

export const SelectHeaderStep = ({ data, onContinue }: SelectHeaderProps) => {
  const styles = useStyleConfig(
    "SelectHeaderStep",
  ) as typeof themeOverrides["components"]["SelectHeaderStep"]["baseStyle"]

  const { translations } = useRsi()
  const [selectedRows, setSelectedRows] = useState<ReadonlySet<number>>(new Set([0]))
  const [isLoading, setIsLoading] = useState(false)

  useLayoutEffect(() => {
    // select the first row that has the most columns
    const maxColumns = Math.max(...data.map((row) => row.length))
    const maxColumnsRowIndex = data.findIndex((row) => row.length === maxColumns)
    setSelectedRows(new Set([maxColumnsRowIndex]))
  }, [data])

  const handleContinue = useCallback(async () => {
    const [selectedRowIndex] = selectedRows
    // We consider data above header to be redundant
    const trimmedData = data.slice(selectedRowIndex + 1)
    setIsLoading(true)
    await onContinue(data[selectedRowIndex], trimmedData)
    setIsLoading(false)
  }, [onContinue, data, selectedRows])

  const cols = Array.from(selectedRows).flatMap((rowIndex) => data[rowIndex])
  const firstThreeCols = cols.slice(0, 3)
  if (cols.length > 3) {
    firstThreeCols.push("etc...")
  }

  const continueButtonTitle = cols.length > 0 ? `My columns are named ${firstThreeCols.join(", ")}` : `Next`

  return (
    <>
      <ModalBody pb={0}>
        <Heading {...styles.heading}>{translations.selectHeaderStep.title}</Heading>
        <Box h={0} flexGrow={1}>
          <SelectHeaderTable data={data} selectedRows={selectedRows} setSelectedRows={setSelectedRows} />
        </Box>
      </ModalBody>
      <ContinueButton
        onContinue={handleContinue}
        title={continueButtonTitle}
        isLoading={isLoading}
        disabled={cols.length === 0}
      />
    </>
  )
}
