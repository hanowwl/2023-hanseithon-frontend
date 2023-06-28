import React, { useMemo } from "react";
import { useForm } from "react-hook-form";

import { Button, Input, Select, SelectProps } from "src/components/common";
import {
  STUDENT_CLASSES,
  STUDENT_DEPARTMENT,
  STUDENT_GRADE,
  StudentDepartment,
  StudentGrade,
} from "src/constants";

import * as S from "./styled";
import { AuthForm } from "../AuthForm";

import { RegisterStepProps } from ".";

export type RegisterStep2Form = {
  name: string;
  grade: StudentGrade;
  department: StudentDepartment;
  classroom: number;
  number: number;
};

export const RegisterStep2: React.FC<RegisterStepProps<RegisterStep2Form>> = ({
  values,
  onNext,
  onPrev,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm<RegisterStep2Form>({ defaultValues: values });
  const [grade, department] = watch(["grade", "department"]);

  const gradeOptions = useMemo(
    () =>
      Object.keys(STUDENT_GRADE).reduce(
        (prev, curr) => [
          ...prev,
          { value: curr, label: STUDENT_GRADE[curr as unknown as StudentGrade] },
        ],
        [{ value: "", label: "학년을 선택해주세요" }]
      ),

    []
  );

  const departmentOptions = useMemo(() => {
    const defaultOptions = [{ value: "", label: "학과를 선택해주세요" }];
    if (!grade) return defaultOptions;

    return Object.keys(STUDENT_CLASSES[grade]).reduce(
      (prev, curr) => [
        ...prev,
        { value: curr, label: STUDENT_DEPARTMENT[curr as unknown as StudentDepartment] },
      ],
      defaultOptions
    );
  }, [grade]);

  const classroomOptions = useMemo(() => {
    const defaultOptions = [{ value: "", label: "반을 선택해주세요" }] as SelectProps["options"];
    if (!grade || !department) return defaultOptions;

    return (STUDENT_CLASSES[grade][department] || []).reduce(
      (prev, curr) => [...prev, { value: curr.toString(), label: `${curr}반` }],
      defaultOptions
    );
  }, [grade, department]);

  const numberOptions = useMemo(() => {
    return Array.from({ length: 25 }).reduce<SelectProps["options"]>(
      (prev, _, i) => [...prev, { value: (i + 1).toString(), label: `${i + 1}번` }],
      [{ value: "", label: "번호를 선택해주세요" }]
    );
  }, []);
  console.log(register("grade", { required: "올바른 학년을 선택해주세요", valueAsNumber: true }));

  return (
    <AuthForm
      onSubmit={handleSubmit(
        (values) => onNext?.(values),
        (errors) => {
          Object.values(errors).forEach((error) => {
            console.log(errors, getValues());
          });
        }
      )}
    >
      <AuthForm.Row>
        <Input
          label="이름"
          message={errors.name?.message}
          error={Boolean(errors.name?.message)}
          {...register("name", {
            required: "올바른 이름을 입력해주세요",
            minLength: { value: 2, message: "최소 2자, 최대 4자까지 입력할 수 있어요" },
            maxLength: { value: 4, message: "최소 2자, 최대 4자까지 입력할 수 있어요" },
          })}
        />
      </AuthForm.Row>
      <AuthForm.Row>
        <AuthForm.Col>
          <Select
            label="학년"
            options={gradeOptions}
            error={Boolean(errors.grade?.message)}
            defaultValue={values?.grade}
            {...register("grade", { required: "올바른 학년을 선택해주세요", valueAsNumber: true })}
          />
        </AuthForm.Col>
        <AuthForm.Col>
          <Select
            label="학과"
            options={departmentOptions}
            error={Boolean(errors.department?.message)}
            defaultValue={values?.department}
            {...register("department", { required: "올바른 학과를 선택해주세요" })}
          />
        </AuthForm.Col>
      </AuthForm.Row>
      <AuthForm.Row>
        <AuthForm.Col>
          <Select
            label="반"
            options={classroomOptions}
            error={Boolean(errors.classroom?.message)}
            defaultValue={values?.classroom}
            {...register("classroom", {
              required: "올바른 반을 선택해주세요",
              valueAsNumber: true,
            })}
          />
        </AuthForm.Col>
        <AuthForm.Col>
          <Select
            label="번호"
            options={numberOptions}
            error={Boolean(errors.number?.message)}
            defaultValue={values?.number}
            {...register("number", { required: "올바른 번호를 선택해주세요", valueAsNumber: true })}
          />
        </AuthForm.Col>
      </AuthForm.Row>

      <AuthForm.Row style={{ flexDirection: "column", marginTop: "auto", gap: "0.8rem" }}>
        <Button type="submit" size="large" fillWidth>
          다음
        </Button>
        <S.RegisterPrevButton type="button" size="large" fillWidth onClick={onPrev}>
          뒤로가기
        </S.RegisterPrevButton>
      </AuthForm.Row>
    </AuthForm>
  );
};
