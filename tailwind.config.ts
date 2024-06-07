/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable perfectionist/sort-objects */
import type { Config } from "tailwindcss";

import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
	content: [
		"./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}",
		"!./src/pages/og-image/[slug].png.ts",
	],
	corePlugins: {
		// disable aspect ratio as per docs -> @tailwindcss/aspect-ratio
		aspectRatio: false,
		borderOpacity: false,
		fontVariantNumeric: false,
		ringOffsetColor: false,
		ringOffsetWidth: false,
		scrollSnapType: false,
		textOpacity: false,
		// disable some core plugins as they are included in the css, even when unused
		touchAction: false,
	},
	darkMode: ["class", '[data-theme="dark"]'],
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
		plugin(function ({ addComponents }) {
			addComponents({
				".cactus-link": {
					"&:hover": {
						"@apply decoration-link decoration-2": {},
					},
					"@apply underline underline-offset-2": {},
				},
				".title": {
					"@apply text-2xl font-semibold text-accent-2": {},
				},
			});
		}),
	],
	theme: {
		extend: {
			colors: {
				"accent-2": "hsl(var(--theme-accent-2) / <alpha-value>)",
				link: "hsl(var(--primary) / <alpha-value>)",
				quote: "hsl(var(--primary) / <alpha-value>)",

				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
			},
			fontFamily: {
				// Add any custom fonts here
				sans: [...fontFamily.sans],
				serif: [...fontFamily.serif],
				myFont: ['"MyFont"', 'sans-serif'],
			},
			transitionProperty: {
				height: "height",
			},
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
			// Remove above once tailwindcss exposes theme type
			typography: (theme) => ({
				DEFAULT: {
					css: {
						a: {
							"@apply cactus-link": "",
						},
						blockquote: {
							borderLeftWidth: "0",
						},
						code: {
							border: "1px dotted #666",
							borderRadius: "2px",
						},
						hr: {
							borderTopStyle: "dashed",
						},
						strong: {
							fontWeight: "700",
						},
						sup: {
							"@apply ms-0.5": "",
							a: {
								"&:after": {
									content: "']'",
								},
								"&:before": {
									content: "'['",
								},
								"&:hover": {
									"@apply text-link no-underline bg-none": "",
								},
								"@apply bg-none": "",
							},
						},
						"tbody tr": {
							borderBottomWidth: "none",
						},
						tfoot: {
							borderTop: "1px dashed #666",
						},
						thead: {
							borderBottomWidth: "none",
						},
						"thead th": {
							borderBottom: "1px dashed #666",
							fontWeight: "700",
						},
					},
				},
				cactus: {
					css: {
						"--tw-prose-body": theme("colors.foreground / 1"),
						"--tw-prose-bold": theme("colors.foreground / 1"),
						"--tw-prose-bullets": theme("colors.foreground / 1"),
						"--tw-prose-code": theme("colors.foreground / 1"),
						"--tw-prose-headings": theme("colors.accent-2 / 1"),
						"--tw-prose-hr": "0.5px dashed #666",
						"--tw-prose-links": theme("colors.foreground / 1"),
						"--tw-prose-quotes": theme("colors.quote / 1"),
						"--tw-prose-th-borders": "#666",
					},
				},
				sm: {
					css: {
						code: {
							fontSize: theme("fontSize.sm")[0],
							fontWeight: "400",
						},
					},
				},
			}),
		},
	},
} satisfies Config;
