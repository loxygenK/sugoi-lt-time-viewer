const SuccessStyle = `
  color: #007700;
  font-weight: bold;
`;

const FailureStyle = `
  color: #770000;
  font-weight: bold;
`;

const InfoStyle = `
  color: #333377;
`;

const TimeStyle = `
  color: #444444;
`;

const MillisecondsStyle = `
  color: #aaaaaa;
`;

const TagStyle = `
  color: #000033;
  font-weight: bold;
`;

export function Info(tag: string, text: string): void {
  log(tag, text, InfoStyle);
}

export function Success(tag: string, text: string): void {
  log(tag, text, SuccessStyle);
}

export function Failure(tag: string, text: string): void {
  log(tag, text, FailureStyle);
}

function log(tag: string, text: string, style: string) {
  const now = new Date();
  const dateString =
    `${now.getHours().toString().padStart(2, "0")}:` +
    `${now.getMinutes().toString().padStart(2, "0")}:` +
    `${now.getSeconds().toString().padStart(2, "0")}%c.` +
    `${now.getMilliseconds().toString().padStart(3, "0")}`;
  const headerLength = dateString.length + tag.length + 1;
  const formattedText = text.replaceAll("\n", "\n" + " ".repeat(headerLength) + "| ");

  console.log(
    `%c${dateString} (%c${tag}%c)%c| ${formattedText}`,
    TimeStyle,
    MillisecondsStyle,
    TagStyle,
    MillisecondsStyle,
    style,
  );
}
