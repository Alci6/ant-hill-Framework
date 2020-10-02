import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, c as claim_element, b as children, f as claim_text, g as detach_dev, h as claim_space, j as add_location, k as attr_dev, l as insert_dev, m as append_dev, n as noop, o as create_component, q as query_selector_all, p as claim_component, r as mount_component, u as transition_in, w as transition_out, x as destroy_component } from './client.9c6c85d6.js';
import { G as Guia, _ as _1_Title } from './guia.4bec3884.js';
import { _ as _99_Credits } from './99-Credits.45fa8d62.js';
import './index.06e68a7f.js';

/* src/components/2-Why.svelte generated by Svelte v3.28.0 */

const file = "src/components/2-Why.svelte";

function create_fragment(ctx) {
	let div1;
	let h2;
	let t0;
	let t1;
	let section;
	let div0;
	let t2;
	let p;
	let t3;
	let mark;
	let t4;
	let t5;

	const block = {
		c: function create() {
			div1 = element("div");
			h2 = element("h2");
			t0 = text("¿Para qué?");
			t1 = space();
			section = element("section");
			div0 = element("div");
			t2 = text("La mayoría de modelos de escalado Agile requieren que todos los equipos\n      trabajen bajo el mismo framework o método.\n      ");
			p = element("p");
			t3 = text("El propósito de Ant Hill es\n        ");
			mark = element("mark");
			t4 = text("respetar como trabajan los equipos");
			t5 = text("\n        y establecer canales de comunicación para la sincronización y\n        alineamiento de la organización");
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { id: true });
			var div1_nodes = children(div1);
			h2 = claim_element(div1_nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "¿Para qué?");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(div1_nodes);
			section = claim_element(div1_nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			div0 = claim_element(section_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t2 = claim_text(div0_nodes, "La mayoría de modelos de escalado Agile requieren que todos los equipos\n      trabajen bajo el mismo framework o método.\n      ");
			p = claim_element(div0_nodes, "P", {});
			var p_nodes = children(p);
			t3 = claim_text(p_nodes, "El propósito de Ant Hill es\n        ");
			mark = claim_element(p_nodes, "MARK", {});
			var mark_nodes = children(mark);
			t4 = claim_text(mark_nodes, "respetar como trabajan los equipos");
			mark_nodes.forEach(detach_dev);
			t5 = claim_text(p_nodes, "\n        y establecer canales de comunicación para la sincronización y\n        alineamiento de la organización");
			p_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 1, 2, 17);
			add_location(mark, file, 10, 8, 320);
			add_location(p, file, 8, 6, 272);
			attr_dev(div0, "class", "fl w-100 w-100-m w-90-l f3-l f4-ns ");
			add_location(div0, file, 5, 4, 89);
			attr_dev(section, "class", "cf pa3 mt0 pt0 fw3 w-75-l");
			add_location(section, file, 3, 2, 40);
			attr_dev(div1, "id", "why");
			add_location(div1, file, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, h2);
			append_dev(h2, t0);
			append_dev(div1, t1);
			append_dev(div1, section);
			append_dev(section, div0);
			append_dev(div0, t2);
			append_dev(div0, p);
			append_dev(p, t3);
			append_dev(p, mark);
			append_dev(mark, t4);
			append_dev(p, t5);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
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
	validate_slots("_2_Why", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<_2_Why> was created with unknown prop '${key}'`);
	});

	return [];
}

class _2_Why extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "_2_Why",
			options,
			id: create_fragment.name
		});
	}
}

/* src/components/Accesos.svelte generated by Svelte v3.28.0 */
const file$1 = "src/components/Accesos.svelte";

function create_fragment$1(ctx) {
	let section;
	let div0;
	let a0;
	let img0;
	let img0_src_value;
	let a0_aria_current_value;
	let t0;
	let a1;
	let p0;
	let t1;
	let a1_aria_current_value;
	let t2;
	let div1;
	let a2;
	let img1;
	let img1_src_value;
	let t3;
	let br;
	let t4;
	let a3;
	let p1;
	let t5;

	const block = {
		c: function create() {
			section = element("section");
			div0 = element("div");
			a0 = element("a");
			img0 = element("img");
			t0 = space();
			a1 = element("a");
			p0 = element("p");
			t1 = text("Leer Guia");
			t2 = space();
			div1 = element("div");
			a2 = element("a");
			img1 = element("img");
			t3 = space();
			br = element("br");
			t4 = space();
			a3 = element("a");
			p1 = element("p");
			t5 = text("Descargar PDF");
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			div0 = claim_element(section_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);

			a0 = claim_element(div0_nodes, "A", {
				"aria-current": true,
				href: true,
				class: true
			});

			var a0_nodes = children(a0);
			img0 = claim_element(a0_nodes, "IMG", { src: true, alt: true, class: true });
			a0_nodes.forEach(detach_dev);
			t0 = claim_space(div0_nodes);

			a1 = claim_element(div0_nodes, "A", {
				"aria-current": true,
				href: true,
				class: true
			});

			var a1_nodes = children(a1);
			p0 = claim_element(a1_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t1 = claim_text(p0_nodes, "Leer Guia");
			p0_nodes.forEach(detach_dev);
			a1_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t2 = claim_space(section_nodes);
			div1 = claim_element(section_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			a2 = claim_element(div1_nodes, "A", { href: true, class: true, target: true });
			var a2_nodes = children(a2);

			img1 = claim_element(a2_nodes, "IMG", {
				src: true,
				alt: true,
				class: true,
				id: true
			});

			a2_nodes.forEach(detach_dev);
			t3 = claim_space(div1_nodes);
			br = claim_element(div1_nodes, "BR", {});
			t4 = claim_space(div1_nodes);
			a3 = claim_element(div1_nodes, "A", { href: true, target: true, class: true });
			var a3_nodes = children(a3);
			p1 = claim_element(a3_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t5 = claim_text(p1_nodes, "Descargar PDF");
			p1_nodes.forEach(detach_dev);
			a3_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img0.src !== (img0_src_value = /*leer*/ ctx[2])) attr_dev(img0, "src", img0_src_value);
			attr_dev(img0, "alt", "why gif");
			attr_dev(img0, "class", "img-svg");
			add_location(img0, file$1, 31, 6, 606);
			attr_dev(a0, "aria-current", a0_aria_current_value = /*segment*/ ctx[0] === "guia" ? "page" : undefined);
			attr_dev(a0, "href", "guia");
			attr_dev(a0, "class", "dim db svelte-1ldzhhn");
			add_location(a0, file$1, 27, 4, 496);
			attr_dev(p0, "class", "svelte-1ldzhhn");
			add_location(p0, file$1, 35, 6, 750);
			attr_dev(a1, "aria-current", a1_aria_current_value = /*segment*/ ctx[0] === "guia" ? "page" : undefined);
			attr_dev(a1, "href", "guia");
			attr_dev(a1, "class", "svelte-1ldzhhn");
			add_location(a1, file$1, 34, 4, 673);
			attr_dev(div0, "class", " dib pa2 tc ma2");
			add_location(div0, file$1, 26, 2, 462);
			if (img1.src !== (img1_src_value = /*documento*/ ctx[3])) attr_dev(img1, "src", img1_src_value);
			attr_dev(img1, "alt", "Descargar PDF");
			attr_dev(img1, "class", "img-svg");
			attr_dev(img1, "id", "descargar_pdf_home");
			add_location(img1, file$1, 57, 6, 1254);
			attr_dev(a2, "href", /*pdfVersion*/ ctx[1]);
			attr_dev(a2, "class", "dim svelte-1ldzhhn");
			attr_dev(a2, "target", "_blank");
			add_location(a2, file$1, 56, 4, 1198);
			add_location(br, file$1, 63, 4, 1383);
			attr_dev(p1, "class", "svelte-1ldzhhn");
			add_location(p1, file$1, 65, 6, 1438);
			attr_dev(a3, "href", /*pdfVersion*/ ctx[1]);
			attr_dev(a3, "target", "_blank");
			attr_dev(a3, "class", "svelte-1ldzhhn");
			add_location(a3, file$1, 64, 4, 1394);
			attr_dev(div1, "class", " dib pa2  tc ma2");
			add_location(div1, file$1, 55, 2, 1163);
			attr_dev(section, "class", "tc tl-l");
			add_location(section, file$1, 23, 0, 410);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, div0);
			append_dev(div0, a0);
			append_dev(a0, img0);
			append_dev(div0, t0);
			append_dev(div0, a1);
			append_dev(a1, p0);
			append_dev(p0, t1);
			append_dev(section, t2);
			append_dev(section, div1);
			append_dev(div1, a2);
			append_dev(a2, img1);
			append_dev(div1, t3);
			append_dev(div1, br);
			append_dev(div1, t4);
			append_dev(div1, a3);
			append_dev(a3, p1);
			append_dev(p1, t5);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*segment*/ 1 && a0_aria_current_value !== (a0_aria_current_value = /*segment*/ ctx[0] === "guia" ? "page" : undefined)) {
				attr_dev(a0, "aria-current", a0_aria_current_value);
			}

			if (dirty & /*segment*/ 1 && a1_aria_current_value !== (a1_aria_current_value = /*segment*/ ctx[0] === "guia" ? "page" : undefined)) {
				attr_dev(a1, "aria-current", a1_aria_current_value);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Accesos", slots, []);
	let { segment } = $$props;
	let pdfVersion = "./descargas/Ant Hill Framework.pdf";
	let leer = "./gif/Ojo.svg";
	let documento = "./gif/Documento.svg";
	let corazon = "./gif/Corazon.svg";
	const writable_props = ["segment"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Accesos> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("segment" in $$props) $$invalidate(0, segment = $$props.segment);
	};

	$$self.$capture_state = () => ({
		Guia,
		segment,
		pdfVersion,
		leer,
		documento,
		corazon
	});

	$$self.$inject_state = $$props => {
		if ("segment" in $$props) $$invalidate(0, segment = $$props.segment);
		if ("pdfVersion" in $$props) $$invalidate(1, pdfVersion = $$props.pdfVersion);
		if ("leer" in $$props) $$invalidate(2, leer = $$props.leer);
		if ("documento" in $$props) $$invalidate(3, documento = $$props.documento);
		if ("corazon" in $$props) corazon = $$props.corazon;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [segment, pdfVersion, leer, documento];
}

class Accesos extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { segment: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Accesos",
			options,
			id: create_fragment$1.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*segment*/ ctx[0] === undefined && !("segment" in props)) {
			console.warn("<Accesos> was created without expected prop 'segment'");
		}
	}

	get segment() {
		throw new Error("<Accesos>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set segment(value) {
		throw new Error("<Accesos>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/index.svelte generated by Svelte v3.28.0 */
const file$2 = "src/routes/index.svelte";

function create_fragment$2(ctx) {
	let t0;
	let main;
	let title;
	let t1;
	let why;
	let t2;
	let accesos;
	let t3;
	let credits;
	let current;
	title = new _1_Title({ $$inline: true });
	why = new _2_Why({ $$inline: true });
	accesos = new Accesos({ $$inline: true });
	credits = new _99_Credits({ $$inline: true });

	const block = {
		c: function create() {
			t0 = space();
			main = element("main");
			create_component(title.$$.fragment);
			t1 = space();
			create_component(why.$$.fragment);
			t2 = space();
			create_component(accesos.$$.fragment);
			t3 = space();
			create_component(credits.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-bi9anu\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			main = claim_element(nodes, "MAIN", { class: true });
			var main_nodes = children(main);
			claim_component(title.$$.fragment, main_nodes);
			t1 = claim_space(main_nodes);
			claim_component(why.$$.fragment, main_nodes);
			t2 = claim_space(main_nodes);
			claim_component(accesos.$$.fragment, main_nodes);
			main_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			claim_component(credits.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "👉 Ant Hill | Un framework Agile";
			attr_dev(main, "class", "sections");
			add_location(main, file$2, 11, 0, 319);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, main, anchor);
			mount_component(title, main, null);
			append_dev(main, t1);
			mount_component(why, main, null);
			append_dev(main, t2);
			mount_component(accesos, main, null);
			insert_dev(target, t3, anchor);
			mount_component(credits, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(title.$$.fragment, local);
			transition_in(why.$$.fragment, local);
			transition_in(accesos.$$.fragment, local);
			transition_in(credits.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(title.$$.fragment, local);
			transition_out(why.$$.fragment, local);
			transition_out(accesos.$$.fragment, local);
			transition_out(credits.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(main);
			destroy_component(title);
			destroy_component(why);
			destroy_component(accesos);
			if (detaching) detach_dev(t3);
			destroy_component(credits, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$2.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$2($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Routes", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ Title: _1_Title, Why: _2_Why, Accesos, Credits: _99_Credits });
	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment$2.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMDRkMjA3Y2QuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FjY2Vzb3Muc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGltcG9ydCBHdWlhIGZyb20gXCIuLy4uL3JvdXRlcy9ndWlhLnN2ZWx0ZVwiO1xuICBleHBvcnQgbGV0IHNlZ21lbnQ7XG4gIGxldCBwZGZWZXJzaW9uID0gXCIuL2Rlc2Nhcmdhcy9BbnQgSGlsbCBGcmFtZXdvcmsucGRmXCI7XG4gIGxldCBsZWVyID0gXCIuL2dpZi9Pam8uc3ZnXCI7XG4gIGxldCBkb2N1bWVudG8gPSBcIi4vZ2lmL0RvY3VtZW50by5zdmdcIjtcbiAgbGV0IGNvcmF6b24gPSBcIi4vZ2lmL0NvcmF6b24uc3ZnXCI7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICBhIHtcbiAgICBjb2xvcjogIzMzMzMzMztcbiAgfVxuXG4gIHAge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuPC9zdHlsZT5cblxuPHNlY3Rpb24gY2xhc3M9XCJ0YyB0bC1sXCI+XG5cbiAgPCEtLSBMZWVyIE9ubGluZSAtLT5cbiAgPGRpdiBjbGFzcz1cIiBkaWIgcGEyIHRjIG1hMlwiPlxuICAgIDxhXG4gICAgICBhcmlhLWN1cnJlbnQ9e3NlZ21lbnQgPT09ICdndWlhJyA/ICdwYWdlJyA6IHVuZGVmaW5lZH1cbiAgICAgIGhyZWY9XCJndWlhXCJcbiAgICAgIGNsYXNzPVwiZGltIGRiXCI+XG4gICAgICA8aW1nIHNyYz17bGVlcn0gYWx0PVwid2h5IGdpZlwiIGNsYXNzPVwiaW1nLXN2Z1wiIC8+XG4gICAgPC9hPlxuICAgIFxuICAgIDxhIGFyaWEtY3VycmVudD17c2VnbWVudCA9PT0gJ2d1aWEnID8gJ3BhZ2UnIDogdW5kZWZpbmVkfSBocmVmPVwiZ3VpYVwiPlxuICAgICAgPHAgPkxlZXIgR3VpYTwvcD5cbiAgICA8L2E+XG4gIDwvZGl2PlxuXG4gICAgPCEtLSBCbG9nIFxuICA8ZGl2IGNsYXNzPVwiIGRpYiBwYTIgIHRjIG1hMlwiPlxuICAgIDxhXG4gICAgICBhcmlhLWN1cnJlbnQ9e3NlZ21lbnQgPT09ICdndWlhJyA/ICdwYWdlJyA6IHVuZGVmaW5lZH1cbiAgICAgIGhyZWY9XCJibG9nXCJcbiAgICAgIGNsYXNzPVwiZGltXCI+XG4gICAgICA8aW1nIHNyYz17Y29yYXpvbn0gYWx0PVwid2h5IGdpZlwiIGNsYXNzPVwiaW1nLXN2Z1wiIC8+XG4gICAgPC9hPlxuICAgIDxiciAvPlxuICAgIDxhIGFyaWEtY3VycmVudD17c2VnbWVudCA9PT0gJ2d1aWEnID8gJ3BhZ2UnIDogdW5kZWZpbmVkfSBocmVmPVwiQmxvZ1wiPlxuICAgICAgPHA+QmxvZzwvcD5cbiAgICA8L2E+XG4gIDwvZGl2PlxuICAtLT5cblxuICA8IS0tIERlc2NhcmdhciBQREYgLS0+XG4gIDxkaXYgY2xhc3M9XCIgZGliIHBhMiAgdGMgbWEyXCI+XG4gICAgPGEgaHJlZj17cGRmVmVyc2lvbn0gY2xhc3M9XCJkaW1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgIDxpbWdcbiAgICAgICAgc3JjPXtkb2N1bWVudG99XG4gICAgICAgIGFsdD1cIkRlc2NhcmdhciBQREZcIlxuICAgICAgICBjbGFzcz1cImltZy1zdmdcIlxuICAgICAgICBpZD1cImRlc2Nhcmdhcl9wZGZfaG9tZVwiIC8+XG4gICAgPC9hPlxuICAgIDxiciAvPlxuICAgIDxhIGhyZWY9e3BkZlZlcnNpb259IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgPHA+RGVzY2FyZ2FyIFBERjwvcD5cbiAgICA8L2E+XG4gIDwvZGl2PlxuXG5cbjwvc2VjdGlvbj5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQStCZ0IsR0FBSTs7OztvRUFIQSxHQUFPLFFBQUssTUFBTSxHQUFHLE1BQU0sR0FBRyxTQUFTOzs7Ozs7b0VBTXRDLEdBQU8sUUFBSyxNQUFNLEdBQUcsTUFBTSxHQUFHLFNBQVM7Ozs7OztvREF3Qi9DLEdBQVM7Ozs7O3VDQUZULEdBQVU7Ozs7Ozs7dUNBUVYsR0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytGQXBDSCxHQUFPLFFBQUssTUFBTSxHQUFHLE1BQU0sR0FBRyxTQUFTOzs7OytGQU10QyxHQUFPLFFBQUssTUFBTSxHQUFHLE1BQU0sR0FBRyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BaEMvQyxPQUFPO0tBQ2QsVUFBVSxHQUFHLG9DQUFvQztLQUNqRCxJQUFJLEdBQUcsZUFBZTtLQUN0QixTQUFTLEdBQUcscUJBQXFCO0tBQ2pDLE9BQU8sR0FBRyxtQkFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
