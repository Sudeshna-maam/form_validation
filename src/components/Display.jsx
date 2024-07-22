import {
  Button,
  Card,
  CardBody,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { zodFormSchema } from "@/utils/schema";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";

import { useMemo, useState } from "react";
import { LockIcon, MailIcon, PhoneIcon } from "lucide-react";
import { isValid } from "zod";

const Display = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: zodResolver(zodFormSchema),
  });

  const userForm = (fData) => {
    console.log(fData);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(userForm)} noValidate>
        <Card>
          <CardBody className="space-y-6 gap-y-3 min-w-[200px] ">
            <div className="text-center font-bold text-3xl">Input</div>
            <div className="flex gap-3">
              <Select
                isRequired
                color="primary"
                variant="bordered"
                label="Title"
                placeholder="Select an option"
                type="text"
                errorMessage={errors.Title?.message}
                isInvalid={!!errors?.Title}
                labelPlacement="outside"
                {...register("Title")}
              >
                <SelectItem>Mr</SelectItem>
                <SelectItem key={"Ms"}>Ms</SelectItem>
                <SelectItem key={"Mrs"}>Mrs</SelectItem>
              </Select>

              <Input
                isRequired
                color="primary"
                variant="bordered"
                label="First Name"
                type="text"
                errorMessage={errors.First_Name?.message}
                isInvalid={!!errors?.First_Name}
                placeholder="First name"
                labelPlacement="outside"
                {...register("First_Name")}
              />
              <Input
                isRequired
                color="primary"
                variant="bordered"
                label="Last Name"
                type="text"
                errorMessage={errors.Last_Name?.message}
                isInvalid={!!errors?.Last_Name}
                placeholder="Last name"
                labelPlacement="outside"
                {...register("Last_Name")}
              />
            </div>
            <Input
              isRequired
              color="primary"
              variant="bordered"
              label="Phone Number"
              type="Number"
              errorMessage={errors.Phone_Number?.message}
              isInvalid={!!errors?.Phone_Number}
              labelPlacement="outside"
              placeholder="Enter your number"
              {...register("Phone_Number")}
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">+91</span>
                </div>
              }
              endContent={<PhoneIcon className="text-default-400 text-2xl " />}
            />
            <Input
              isRequired
              color="primary"
              variant="bordered"
              label="Email"
              type="Email"
              // errorMessage={isInvalid && "Please enter a valid email"}

              errorMessage={errors.Email?.message}
              isInvalid={!!errors?.Email}
              placeholder="Enter your email"
              labelPlacement="outside"
              {...register("Email")}
              startContent={<MailIcon className="text-2xl text-default-400 " />}
              // endContent={
              //   <span className="text-default-400 text-small">@gmail.com</span>
              // }
            />
            <Input
              isRequired
              color="primary"
              variant="bordered"
              label="Password"
              errorMessage={errors.Password?.message}
              isInvalid={!!errors?.Password}
              placeholder="Enter your password"
              startContent={<LockIcon className="text-2xl text-default-400" />}
              labelPlacement="outside"
              {...register("Password")}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
            />
            <Button
              isDisabled={isDirty && !isValid}
              type="submit"
              color="primary"
              variant="shadow"
              size="lg"
            >
              submit
            </Button>
          </CardBody>
        </Card>
      </form>
    </>
  );
};

export default Display;
