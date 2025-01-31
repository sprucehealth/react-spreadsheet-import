import { Step, Steps as Stepper, useSteps } from "chakra-ui-steps"

import { CgCheck } from "react-icons/cg"
import { ModalHeader } from "@chakra-ui/react"
import { UploadFlow } from "./UploadFlow"
import { useRsi } from "../hooks/useRsi"

const CheckIcon = ({ color }: { color: string }) => <CgCheck size="2.25rem" color={color} />

const steps = ["uploadStep", "selectHeaderStep", "matchColumnsStep", "validationStep"] as const

export const Steps = () => {
  const { translations } = useRsi()
  const { nextStep, activeStep } = useSteps({
    initialStep: 0,
  })

  return (
    <>
      <ModalHeader display={["none", "none", "block"]}>
        <Stepper activeStep={activeStep} checkIcon={CheckIcon}>
          {steps.map((key) => (
            <Step label={translations[key].shortTitle || translations[key].title} key={key} />
          ))}
        </Stepper>
      </ModalHeader>
      <UploadFlow nextStep={nextStep} />
    </>
  )
}
