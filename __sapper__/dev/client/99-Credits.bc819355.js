import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, c as claim_element, b as children, f as claim_text, g as detach_dev, h as claim_space, j as attr_dev, k as add_location, y as set_style, l as insert_dev, m as append_dev, n as noop } from './client.0d937dcf.js';

/* src/components/99-Credits.svelte generated by Svelte v3.28.0 */

const file = "src/components/99-Credits.svelte";

function create_fragment(ctx) {
	let footer;
	let p;
	let t0;
	let a0;
	let t1;
	let t2;
	let div;
	let a1;
	let img;
	let img_src_value;

	const block = {
		c: function create() {
			footer = element("footer");
			p = element("p");
			t0 = text("desarrollado con ❤️ por\n    ");
			a0 = element("a");
			t1 = text("Alcibíades");
			t2 = space();
			div = element("div");
			a1 = element("a");
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			footer = claim_element(nodes, "FOOTER", { class: true });
			var footer_nodes = children(footer);
			p = claim_element(footer_nodes, "P", { class: true });
			var p_nodes = children(p);
			t0 = claim_text(p_nodes, "desarrollado con ❤️ por\n    ");
			a0 = claim_element(p_nodes, "A", { href: true, target: true, class: true });
			var a0_nodes = children(a0);
			t1 = claim_text(a0_nodes, "Alcibíades");
			a0_nodes.forEach(detach_dev);
			p_nodes.forEach(detach_dev);
			t2 = claim_space(footer_nodes);
			div = claim_element(footer_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			a1 = claim_element(div_nodes, "A", { rel: true, href: true });
			var a1_nodes = children(a1);
			img = claim_element(a1_nodes, "IMG", { alt: true, style: true, src: true });
			a1_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			footer_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a0, "href", "https://www.linkedin.com/in/alcibiadesc/");
			attr_dev(a0, "target", "#blank");
			attr_dev(a0, "class", "lookhere");
			add_location(a0, file, 4, 4, 129);
			attr_dev(p, "class", " tc courier fw1 pt3 f5-ns f6-m f7 ");
			add_location(p, file, 2, 2, 50);
			attr_dev(img, "alt", "Licencia de Creative Commons");
			set_style(img, "border-width", "0");
			if (img.src !== (img_src_value = "https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png")) attr_dev(img, "src", img_src_value);
			add_location(img, file, 15, 6, 398);
			attr_dev(a1, "rel", "license");
			attr_dev(a1, "href", "http://creativecommons.org/licenses/by-nc-sa/4.0/");
			add_location(a1, file, 14, 4, 317);
			attr_dev(div, "class", " tc courier fw3 f5-ns f6-m f7");
			add_location(div, file, 13, 2, 269);
			attr_dev(footer, "class", " bt b--black-05 mv4 mid-gray ");
			add_location(footer, file, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, footer, anchor);
			append_dev(footer, p);
			append_dev(p, t0);
			append_dev(p, a0);
			append_dev(a0, t1);
			append_dev(footer, t2);
			append_dev(footer, div);
			append_dev(div, a1);
			append_dev(a1, img);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(footer);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("_99_Credits", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<_99_Credits> was created with unknown prop '${key}'`);
	});

	return [];
}

class _99_Credits extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "_99_Credits",
			options,
			id: create_fragment.name
		});
	}
}

export { _99_Credits as _ };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTktQ3JlZGl0cy5iYzgxOTM1NS5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
