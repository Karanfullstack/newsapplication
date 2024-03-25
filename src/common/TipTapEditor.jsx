import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const extensions = [StarterKit];

const content = ``;

export default function TipTapEditor() {
	const editor = useEditor({
		editorProps: {
			attributes: {
				class:
					"prose max-w-none [&_ol]:list-decimal [&_ul]:list-disc prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none border border-gray-700 p-2   h-full min-h-[300px]  w-full",
			},
		},

		extensions,
		content,
	});
	if (!editor) return null;

	const gethtml = () => {
		console.log(editor.getHTML());
	};
	return (
		<div className="w-full max-w-[800px] flex flex-col items-start">
			<div className="space-x-1 ml-5">
				<button
					onClick={() => editor.chain().focus().toggleBold().run()}
					disabled={!editor.can().chain().focus().toggleBold().run()}
					className={`btn ${editor.isActive("bold") ? "is-active" : ""}`}
				>
					Bold
				</button>
				<button
					onClick={() => editor.chain().focus().toggleItalic().run()}
					disabled={!editor.can().chain().focus().toggleItalic().run()}
					className={`btn ${editor.isActive("italic") ? "is-active " : ""}`}
				>
					<i>Italic</i>
				</button>

				<button
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 1 }).run()
					}
					className={`btn ${
						editor.isActive("heading", { level: 1 }) ? "is-active" : ""
					}`}
				>
					H1
				</button>
			</div>
			<section className="w-full">
				<EditorContent editor={editor} className="" />
			</section>
			<button onClick={gethtml}>Save</button>
		</div>
	);
}
