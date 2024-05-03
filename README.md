# psd-gen

A simple tool to make photoshop psd files programmatically via JSON. Based on [ag-psd](https://github.com/Agamnentzar/ag-psd).

## Usage

`npx psd-gen -o output.psd input.json`

### Basic Json format

The first layer is a image layer. The content of `01.png` will be imported into the layer.

The second layer is a text layer. When you open the PSD file, you will see a warning that want to update the text layer.
Please click update or the text layer will not be rendered correctly.

More info can be found at [ag-psd](https://github.com/Agamnentzar/ag-psd).

```json
{
  "width": 850,
  "height": 1200,
  "children": [
    {
      "name": "original",
      "imagePath": "01.png"
    },
    {
      "name": "text",
      "text": {
        "text": "Hello world",
        "transform": [
          1,
          0,
          0,
          1,
          0,
          0
        ],
        "antiAlias": "smooth",
        "style": {
          "font": {
            "name": "Helvetica"
          },
          "fontSize": 72
        },
        "shapeType": "box",
        "boxBounds": [
          0,
          0,
          200,
          400
        ]
      }
    }
  ]
}
```

## Development

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run src/index.ts 
```

This project was created using `bun init` in bun v1.1.6. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
