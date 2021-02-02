
export const renderIf = (condition, ifCallback) => (condition() ? ifCallback() : null);

export const renderIfElse = (condition, ifCallback, elseCallback) => (condition() ? ifCallback() : elseCallback());

