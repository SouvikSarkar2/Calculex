export const InputButtonTypes: string[] = [
  "7",
  "8",
  "9",
  "4",
  "5",
  "6",
  "1",
  "2",
  "3",
  "AC",
  "0",
  ".",
];

export const TopButtonTypes: string[] = ["%", "X", "/"];

export const SideButtonTypes: string[] = ["E", "-", "+"];

export const calculate = (expression: string): number | string => {
  expression = preprocessExpression(expression);
  expression = expression.replace(/\s/g, "");
  const validExpressionRegex = /^(\d+(\.\d+)?|[-+*/%()])+$/;
  if (!validExpressionRegex.test(expression)) {
    return "SYNTAX ERROR";
  }

  try {
    const result = evaluateExpression(expression);
    return result;
  } catch (error) {
    return "SYNTAX ERROR";
  }
};

const preprocessExpression = (expression: string): string => {
  expression = expression.replace(/([+-])/g, " $1 ");
  expression = expression.replace(/\s+/g, " ").trim();
  return expression;
};

const evaluateExpression = (expression: string): number => {
  const operators: { [key: string]: (a: number, b: number) => number } = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
    "%": (a, b) => a % b,
  };

  const tokens = expression.match(
    /(?:\d+\.\d+|\d+|\.\d+|[-+*/%()]|\-\d+(\.\d+)?)/g
  );

  const stack: number[] = [];

  const operatorStack: string[] = [];

  const applyOperator = (): void => {
    const operator = operatorStack.pop();
    const b = stack.pop()!;
    const a = stack.pop()!;

    if (operator === "-") {
      stack.push(a - b);
    } else {
      if (operator && operators[operator]) {
        stack.push(operators[operator](a, b));
      }
    }
  };

  if (!tokens) {
    return 0;
  }

  tokens.forEach((token) => {
    if (token.match(/^\d+(\.\d+)?$/)) {
      stack.push(parseFloat(token));
    } else if (token === "(") {
      operatorStack.push(token);
    } else if (token === ")") {
      while (
        operatorStack.length > 0 &&
        operatorStack[operatorStack.length - 1] !== "("
      ) {
        applyOperator();
      }
      operatorStack.pop();
    } else {
      while (
        operatorStack.length > 0 &&
        precedence(operatorStack[operatorStack.length - 1]) >= precedence(token)
      ) {
        applyOperator();
      }
      operatorStack.push(token);
    }
  });

  while (operatorStack.length > 0) {
    applyOperator();
  }

  return stack.pop()!;
};

const precedence = (operator: string): number => {
  switch (operator) {
    case "+":
    case "-":
      return 1;
    case "*":
    case "/":
    case "%":
      return 2;
    default:
      return 0;
  }
};
