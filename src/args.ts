import { parseArgs as nodeParseArgs } from "node:util";

export default function parseArgs() {
  let values: {
    help?: boolean;
    output?: string;
  } = {};
  let positionals: string[] = [];

  try {
    ({ values, positionals } = nodeParseArgs({
      args: process.argv.slice(2),
      options: {
        output: {
          type: "string",
          short: "o",
        },
        help: {
          type: "boolean",
          short: "h",
        },
      },
      strict: true,
      allowPositionals: true,
    }));
  } catch (e: unknown) {
    console.error((e as Error).message);
    process.exit(1);
  }

  if (values.help) {
    console.log(
      `Usage: psd-gen [options] [file]
Options:
-o, --output  Output path
-h, --help    Show this help message`,
    );
    process.exit(0);
  }

  if (positionals.length !== 1) {
    console.error("Error: Missing file argument");
    process.exit(1);
  }

  if (!values.output) {
    console.error("Error: Missing output option");
    process.exit(1);
  }

  return {
    input: positionals[0],
    output: values.output,
  };
}
