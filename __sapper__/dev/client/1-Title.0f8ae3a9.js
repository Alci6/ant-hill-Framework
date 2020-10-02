import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, c as claim_element, b as children, f as claim_text, g as detach_dev, h as claim_space, k as attr_dev, j as add_location, l as insert_dev, m as append_dev, n as noop } from './client.43b1dcb9.js';

/* src/components/1-Title.svelte generated by Svelte v3.28.0 */

const file = "src/components/1-Title.svelte";

function create_fragment(ctx) {
	let div;
	let a;
	let h1;
	let t0;
	let t1;
	let p;
	let t2;
	let span0;
	let t3;
	let t4;
	let span1;
	let t5;

	const block = {
		c: function create() {
			div = element("div");
			a = element("a");
			h1 = element("h1");
			t0 = text("Ant Hill");
			t1 = space();
			p = element("p");
			t2 = text("Un framework para generar\n    ");
			span0 = element("span");
			t3 = text("feedback loops");
			t4 = text("\n    orientados a la aportación continua de\n    ");
			span1 = element("span");
			t5 = text("valor");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true, id: true });
			var div_nodes = children(div);
			a = claim_element(div_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			h1 = claim_element(a_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Ant Hill");
			h1_nodes.forEach(detach_dev);
			a_nodes.forEach(detach_dev);
			t1 = claim_space(div_nodes);
			p = claim_element(div_nodes, "P", { class: true });
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, "Un framework para generar\n    ");
			span0 = claim_element(p_nodes, "SPAN", { class: true });
			var span0_nodes = children(span0);
			t3 = claim_text(span0_nodes, "feedback loops");
			span0_nodes.forEach(detach_dev);
			t4 = claim_text(p_nodes, "\n    orientados a la aportación continua de\n    ");
			span1 = claim_element(p_nodes, "SPAN", { class: true });
			var span1_nodes = children(span1);
			t5 = claim_text(span1_nodes, "valor");
			span1_nodes.forEach(detach_dev);
			p_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", " courier f1-ns f-subheadline-l lh-title-l mb0");
			add_location(h1, file, 9, 4, 107);
			attr_dev(a, "href", ".");
			attr_dev(a, "class", "svelte-7mn6z7");
			add_location(a, file, 8, 2, 90);
			attr_dev(span0, "class", "lookhere");
			add_location(span0, file, 14, 4, 255);
			attr_dev(span1, "class", "lookhere");
			add_location(span1, file, 16, 4, 347);
			attr_dev(p, "class", "fw3 f3-ns f2-l mt2 ");
			add_location(p, file, 12, 2, 189);
			attr_dev(div, "class", "ph1 pb1 w-80 ");
			attr_dev(div, "id", "title");
			add_location(div, file, 6, 0, 48);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, a);
			append_dev(a, h1);
			append_dev(h1, t0);
			append_dev(div, t1);
			append_dev(div, p);
			append_dev(p, t2);
			append_dev(p, span0);
			append_dev(span0, t3);
			append_dev(p, t4);
			append_dev(p, span1);
			append_dev(span1, t5);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
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
	validate_slots("_1_Title", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<_1_Title> was created with unknown prop '${key}'`);
	});

	return [];
}

class _1_Title extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "_1_Title",
			options,
			id: create_fragment.name
		});
	}
}

export { _1_Title as _ };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS1UaXRsZS4wZjhhZTNhOS5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
