import { Button, ModalFooter } from "@chakra-ui/react"

type ContinueButtonProps = {
  onContinue: (val: any) => void
  title: string
  isLoading?: boolean
  disabled?: boolean
}

export const ContinueButton = ({ onContinue, title, isLoading, disabled }: ContinueButtonProps) => (
  <ModalFooter>
    <Button size="lg" onClick={onContinue} isLoading={isLoading} disabled={disabled}>
      {title}
    </Button>
  </ModalFooter>
)
