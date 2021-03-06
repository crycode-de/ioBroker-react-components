import * as React from "react";
export interface CancelableInputState {
    editing: boolean;
    text: string;
}
export interface CancelableInputProps {
    text: string;
    maxLength?: number;
    textChanged: (newText: string) => void;
}
export declare class CancelableInput extends React.Component<CancelableInputProps, CancelableInputState> {
    constructor(props: CancelableInputProps);
    private txtEdit;
    private readonly beginEdit;
    private readonly onEdit;
    private readonly endEdit;
    private readonly keyDown;
    private selectPending;
    render(): JSX.Element;
}
