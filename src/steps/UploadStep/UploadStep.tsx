import { Box, Heading, ModalBody, Text, useStyleConfig } from "@chakra-ui/react"
import { useCallback, useState } from "react"

import { DropZone } from "./components/DropZone"
import { ExampleTable } from "./components/ExampleTable"
import { FadingOverlay } from "./components/FadingOverlay"
import type XLSX from "xlsx"
import type { themeOverrides } from "../../theme"
import { useRsi } from "../../hooks/useRsi"

type UploadProps = {
  onContinue: (data: XLSX.WorkBook) => Promise<void>
}

export const UploadStep = ({ onContinue }: UploadProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const styles = useStyleConfig("UploadStep") as typeof themeOverrides["components"]["UploadStep"]["baseStyle"]
  const { translations, fields } = useRsi()
  const handleOnContinue = useCallback(
    async (data) => {
      setIsLoading(true)
      await onContinue(data)
      setIsLoading(false)
    },
    [onContinue],
  )
  return (
    <ModalBody>
      <Heading sx={styles.heading}>{translations.uploadStep.title}</Heading>
      <Text sx={styles.title}>{translations.uploadStep.manifestTitle}</Text>
      <Text sx={styles.subtitle}>{translations.uploadStep.manifestDescription}</Text>
      {/* <Box sx={styles.tableWrapper}>
        <ExampleTable fields={fields} />
        <FadingOverlay />
      </Box> */}
      <DropZone onContinue={handleOnContinue} isLoading={isLoading} />
    </ModalBody>
  )
}
