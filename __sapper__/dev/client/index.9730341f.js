import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, D as validate_each_argument, E as validate_store, F as component_subscribe, v as validate_slots, e as element, t as text, a as space, c as claim_element, b as children, f as claim_text, g as detach_dev, h as claim_space, k as attr_dev, j as add_location, l as insert_dev, m as append_dev, o as create_component, q as query_selector_all, p as claim_component, r as mount_component, G as listen_dev, u as transition_in, w as transition_out, x as destroy_component, H as destroy_each, I as set_store_value, n as noop } from './client.a266db13.js';
import './index.5d08f35b.js';
import { N as Nav_horizontal, p as posts, s as showStore } from './posts.605659bc.js';

/* src/routes/blog/index.svelte generated by Svelte v3.28.0 */
const file = "src/routes/blog/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[5] = list[i];
	return child_ctx;
}

// (108:8) {#if post.description}
function create_if_block_1(ctx) {
	let p;
	let t_value = /*shortDescription*/ ctx[3](/*post*/ ctx[5].description) + "";
	let t;

	const block = {
		c: function create() {
			p = element("p");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			p = claim_element(nodes, "P", { class: true });
			var p_nodes = children(p);
			t = claim_text(p_nodes, t_value);
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(p, "class", "ph3 post-description lookhere svelte-elh90n");
			add_location(p, file, 108, 10, 2139);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			append_dev(p, t);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(108:8) {#if post.description}",
		ctx
	});

	return block;
}

// (114:8) {#if post.date}
function create_if_block(ctx) {
	let p;
	let t_value = /*dateTransformer*/ ctx[2](/*post*/ ctx[5].date) + "";
	let t;

	const block = {
		c: function create() {
			p = element("p");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			p = claim_element(nodes, "P", { class: true });
			var p_nodes = children(p);
			t = claim_text(p_nodes, t_value);
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(p, "class", " ma1 pb2 pr2 tr f6 gray lh-copy courier");
			add_location(p, file, 114, 10, 2294);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			append_dev(p, t);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(114:8) {#if post.date}",
		ctx
	});

	return block;
}

// (98:2) {#each postsOrdered as post}
function create_each_block(ctx) {
	let a;
	let div;
	let h1;
	let t0_value = /*post*/ ctx[5].title + "";
	let t0;
	let t1;
	let t2;
	let t3;
	let a_href_value;
	let if_block0 = /*post*/ ctx[5].description && create_if_block_1(ctx);
	let if_block1 = /*post*/ ctx[5].date && create_if_block(ctx);

	const block = {
		c: function create() {
			a = element("a");
			div = element("div");
			h1 = element("h1");
			t0 = text(t0_value);
			t1 = space();
			if (if_block0) if_block0.c();
			t2 = space();
			if (if_block1) if_block1.c();
			t3 = space();
			this.h();
		},
		l: function claim(nodes) {
			a = claim_element(nodes, "A", { rel: true, href: true, class: true });
			var a_nodes = children(a);
			div = claim_element(a_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			h1 = claim_element(div_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, t0_value);
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(div_nodes);
			if (if_block0) if_block0.l(div_nodes);
			t2 = claim_space(div_nodes);
			if (if_block1) if_block1.l(div_nodes);
			div_nodes.forEach(detach_dev);
			t3 = claim_space(a_nodes);
			a_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "f3 lh-copy courier mb0 ph3 pt3 underline-hover title-card link svelte-elh90n");
			add_location(h1, file, 102, 8, 1974);
			attr_dev(div, "class", " center-m post-card w-60-ns w-80-m w-100 shadow-4 br3 svelte-elh90n");
			add_location(div, file, 100, 6, 1897);
			attr_dev(a, "rel", "prefetch");
			attr_dev(a, "href", a_href_value = `/blog/${/*post*/ ctx[5].permalink}`);
			attr_dev(a, "class", "svelte-elh90n");
			add_location(a, file, 98, 4, 1838);
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);
			append_dev(a, div);
			append_dev(div, h1);
			append_dev(h1, t0);
			append_dev(div, t1);
			if (if_block0) if_block0.m(div, null);
			append_dev(div, t2);
			if (if_block1) if_block1.m(div, null);
			append_dev(a, t3);
		},
		p: function update(ctx, dirty) {
			if (/*post*/ ctx[5].description) if_block0.p(ctx, dirty);
			if (/*post*/ ctx[5].date) if_block1.p(ctx, dirty);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(98:2) {#each postsOrdered as post}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let navhorizontal;
	let t1;
	let main;
	let h2;
	let t2;
	let t3;
	let current;
	let mounted;
	let dispose;
	navhorizontal = new Nav_horizontal({ $$inline: true });
	let each_value = /*postsOrdered*/ ctx[1];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			t0 = space();
			create_component(navhorizontal.$$.fragment);
			t1 = space();
			main = element("main");
			h2 = element("h2");
			t2 = text("Últimos artículos");
			t3 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-13a9gc5\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			claim_component(navhorizontal.$$.fragment, nodes);
			t1 = claim_space(nodes);
			main = claim_element(nodes, "MAIN", { class: true });
			var main_nodes = children(main);
			h2 = claim_element(main_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t2 = claim_text(h2_nodes, "Últimos artículos");
			h2_nodes.forEach(detach_dev);
			t3 = claim_space(main_nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(main_nodes);
			}

			main_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Ant Hill | Blog";
			attr_dev(h2, "class", "tl-l tc intro svelte-elh90n");
			add_location(h2, file, 95, 2, 1753);
			attr_dev(main, "class", "sections");
			add_location(main, file, 92, 0, 1688);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			mount_component(navhorizontal, target, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, main, anchor);
			append_dev(main, h2);
			append_dev(h2, t2);
			append_dev(main, t3);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(main, null);
			}

			current = true;

			if (!mounted) {
				dispose = listen_dev(main, "click", /*click_handler*/ ctx[4], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*postsOrdered, dateTransformer, shortDescription*/ 14) {
				each_value = /*postsOrdered*/ ctx[1];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(main, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(navhorizontal.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(navhorizontal.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			destroy_component(navhorizontal, detaching);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(main);
			destroy_each(each_blocks, detaching);
			mounted = false;
			dispose();
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

function instance($$self, $$props, $$invalidate) {
	let $showStore;
	validate_store(showStore, "showStore");
	component_subscribe($$self, showStore, $$value => $$invalidate(0, $showStore = $$value));
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Blog", slots, []);

	let postsOrdered = posts.sort((a, b) => {
		a = a.date.split("/").reverse().join("");
		b = b.date.split("/").reverse().join("");
		return a < b ? 1 : a > b ? -1 : 0;
	});

	const dateTransformer = inputDate => {
		let arrayDate = inputDate.split("/");
		let reverseDate = arrayDate.reverse();
		let dia = arrayDate[2];

		let mes = arrayDate[1] == 0
		? arrayDate[1].substring(1)
		: arrayDate[1];

		let año = arrayDate[0];

		const arrayMeses = [
			"ene",
			"feb",
			"mar",
			"abr",
			"may",
			"jun",
			"jul",
			"ago",
			"sept",
			"oct",
			"nov",
			"dic"
		];

		return `${dia} ${arrayMeses[mes - 1]}. ${año == new Date().getFullYear() ? "" : año}`;
	};

	const shortDescription = inputDescription => {
		let output = "";

		inputDescription.length > 140
		? output = inputDescription.substring(0, 140) + "..."
		: output = inputDescription;

		return output;
	};

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Blog> was created with unknown prop '${key}'`);
	});

	const click_handler = () => set_store_value(showStore, $showStore = false, $showStore);

	$$self.$capture_state = () => ({
		showStore,
		NavHorizontal: Nav_horizontal,
		posts,
		postsOrdered,
		dateTransformer,
		shortDescription,
		$showStore
	});

	$$self.$inject_state = $$props => {
		if ("postsOrdered" in $$props) $$invalidate(1, postsOrdered = $$props.postsOrdered);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [$showStore, postsOrdered, dateTransformer, shortDescription, click_handler];
}

class Blog extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Blog",
			options,
			id: create_fragment.name
		});
	}
}

export default Blog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguOTczMDM0MWYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYmxvZy9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgc2hvd1N0b3JlIH0gZnJvbSAnLi8uLi8uLi9zdG9yZS9zaWRlYmFyLXN0b3JlLmpzJztcblx0aW1wb3J0IE5hdkhvcml6b250YWwgZnJvbSAnLi8uLi8uLi9jb21wb25lbnRzL05hdi1ob3Jpem9udGFsLnN2ZWx0ZSc7XG4gIGltcG9ydCB7IHBvc3RzIH0gZnJvbSBcIi4uLy4uL3Bvc3RzXCI7XG4gIFxuICBcbiAgXG5cbiAgLy8gT3JkZXIgUG9zdCBieSByZWNlbnRcbiAgbGV0IHBvc3RzT3JkZXJlZCA9IHBvc3RzLnNvcnQoKGEsIGIpID0+IHtcbiAgICBhID0gYS5kYXRlXG4gICAgICAuc3BsaXQoXCIvXCIpXG4gICAgICAucmV2ZXJzZSgpXG4gICAgICAuam9pbihcIlwiKTtcbiAgICBiID0gYi5kYXRlXG4gICAgICAuc3BsaXQoXCIvXCIpXG4gICAgICAucmV2ZXJzZSgpXG4gICAgICAuam9pbihcIlwiKTtcblxuICAgIHJldHVybiBhIDwgYiA/IDEgOiBhID4gYiA/IC0xIDogMDtcbiAgfSk7XG5cbiAgY29uc3QgZGF0ZVRyYW5zZm9ybWVyID0gaW5wdXREYXRlID0+IHtcbiAgICBsZXQgYXJyYXlEYXRlID0gaW5wdXREYXRlLnNwbGl0KFwiL1wiKTtcbiAgICBsZXQgcmV2ZXJzZURhdGUgPSBhcnJheURhdGUucmV2ZXJzZSgpO1xuICAgIGxldCBkaWEgPSBhcnJheURhdGVbMl07XG4gICAgbGV0IG1lcyA9IGFycmF5RGF0ZVsxXSA9PSAwID8gYXJyYXlEYXRlWzFdLnN1YnN0cmluZygxKSA6IGFycmF5RGF0ZVsxXTtcbiAgICBsZXQgYcOxbyA9IGFycmF5RGF0ZVswXTtcblxuICAgIGNvbnN0IGFycmF5TWVzZXMgPSBbXG4gICAgICBcImVuZVwiLFxuICAgICAgXCJmZWJcIixcbiAgICAgIFwibWFyXCIsXG4gICAgICBcImFiclwiLFxuICAgICAgXCJtYXlcIixcbiAgICAgIFwianVuXCIsXG4gICAgICBcImp1bFwiLFxuICAgICAgXCJhZ29cIixcbiAgICAgIFwic2VwdFwiLFxuICAgICAgXCJvY3RcIixcbiAgICAgIFwibm92XCIsXG4gICAgICBcImRpY1wiXG4gICAgXTtcbiAgICByZXR1cm4gYCR7ZGlhfSAke2FycmF5TWVzZXNbbWVzIC0gMV19LiAke1xuICAgICAgYcOxbyA9PSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgPyBcIlwiIDogYcOxb1xuICAgIH1gO1xuICB9O1xuXG4gIGNvbnN0IHNob3J0RGVzY3JpcHRpb24gPSBpbnB1dERlc2NyaXB0aW9uID0+IHtcbiAgICBsZXQgb3V0cHV0ID0gXCJcIjtcbiAgICBpbnB1dERlc2NyaXB0aW9uLmxlbmd0aCA+IDE0MFxuICAgICAgPyAob3V0cHV0ID0gaW5wdXREZXNjcmlwdGlvbi5zdWJzdHJpbmcoMCwgMTQwKSArIFwiLi4uXCIpXG4gICAgICA6IChvdXRwdXQgPSBpbnB1dERlc2NyaXB0aW9uKTtcbiAgICByZXR1cm4gb3V0cHV0O1xuICB9O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgLnBvc3QtY2FyZCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgbWluLWhlaWdodDogOHZoO1xuICB9XG5cbiAgLnRpdGxlLWNhcmQ6aG92ZXIge1xuICAgIGNvbG9yOiAjZmY3ZDg3O1xuICB9XG5cbiAgLnRpdGxlLWNhcmQ6Zm9jdXMge1xuICAgIGNvbG9yOiAjZmY3ZDg3O1xuICB9XG5cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjMzMzMzMzO1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRlbSkge1xuICAgIC5wb3N0LWRlc2NyaXB0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICB9XG4gIH1cblxuICAgLmludHJve1xuICAgIG1hcmdpbi10b3A6IDZyZW07XG4gIH1cbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cbiAgPHRpdGxlPkFudCBIaWxsIHwgQmxvZzwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48TmF2SG9yaXpvbnRhbCAvPlxuPG1haW4gY2xhc3M9XCJzZWN0aW9uc1wiIG9uOmNsaWNrPXsoKT0+ICRzaG93U3RvcmUgPSBmYWxzZX0+XG4gIFxuXG4gIDxoMiBjbGFzcz1cInRsLWwgdGMgaW50cm9cIj7Dmmx0aW1vcyBhcnTDrWN1bG9zPC9oMj5cblxuICB7I2VhY2ggcG9zdHNPcmRlcmVkIGFzIHBvc3R9XG4gICAgPGEgcmVsPVwicHJlZmV0Y2hcIiBocmVmPXtgL2Jsb2cvJHtwb3N0LnBlcm1hbGlua31gfT5cblxuICAgICAgPGRpdiBjbGFzcz1cIiBjZW50ZXItbSBwb3N0LWNhcmQgdy02MC1ucyB3LTgwLW0gdy0xMDAgc2hhZG93LTQgYnIzXCI+XG5cbiAgICAgICAgPGgxXG4gICAgICAgICAgY2xhc3M9XCJmMyBsaC1jb3B5IGNvdXJpZXIgbWIwIHBoMyBwdDMgdW5kZXJsaW5lLWhvdmVyIHRpdGxlLWNhcmQgbGlua1wiPlxuICAgICAgICAgIHtwb3N0LnRpdGxlfVxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIHsjaWYgcG9zdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICA8cCBjbGFzcz1cInBoMyBwb3N0LWRlc2NyaXB0aW9uIGxvb2toZXJlXCI+XG4gICAgICAgICAgICB7c2hvcnREZXNjcmlwdGlvbihwb3N0LmRlc2NyaXB0aW9uKX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIHsvaWZ9XG5cbiAgICAgICAgeyNpZiBwb3N0LmRhdGV9XG4gICAgICAgICAgPHAgY2xhc3M9XCIgbWExIHBiMiBwcjIgdHIgZjYgZ3JheSBsaC1jb3B5IGNvdXJpZXJcIj5cbiAgICAgICAgICAgIHtkYXRlVHJhbnNmb3JtZXIocG9zdC5kYXRlKX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIHsvaWZ9XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvYT5cbiAgey9lYWNofVxuXG4gIFxuXG48L21haW4+XG5cblxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBNkdhLEdBQWdCLGFBQUMsR0FBSSxJQUFDLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQU1qQyxHQUFlLGFBQUMsR0FBSSxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBWDNCLEdBQUksSUFBQyxLQUFLOzs7Ozs7MEJBR1IsR0FBSSxJQUFDLFdBQVc7MEJBTWhCLEdBQUksSUFBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0RBZmUsR0FBSSxJQUFDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBU3RDLEdBQUksSUFBQyxXQUFXO2dCQU1oQixHQUFJLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBaEJiLEdBQVk7Ozs7Z0NBQWpCLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBQUMsR0FBWTs7OzsrQkFBakIsTUFBSTs7Ozs7Ozs7Ozs7Ozs7OztvQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXhGRixZQUFZLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQztFQUNqQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FDUCxLQUFLLENBQUMsR0FBRyxFQUNULE9BQU8sR0FDUCxJQUFJLENBQUMsRUFBRTtFQUNWLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUNQLEtBQUssQ0FBQyxHQUFHLEVBQ1QsT0FBTyxHQUNQLElBQUksQ0FBQyxFQUFFO1NBRUgsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzs7O09BRzdCLGVBQWUsR0FBRyxTQUFTO01BQzNCLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUc7TUFDL0IsV0FBVyxHQUFHLFNBQVMsQ0FBQyxPQUFPO01BQy9CLEdBQUcsR0FBRyxTQUFTLENBQUMsQ0FBQzs7TUFDakIsR0FBRyxHQUFHLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUFHLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFBSSxTQUFTLENBQUMsQ0FBQzs7TUFDakUsR0FBRyxHQUFHLFNBQVMsQ0FBQyxDQUFDOztRQUVmLFVBQVU7R0FDZCxLQUFLO0dBQ0wsS0FBSztHQUNMLEtBQUs7R0FDTCxLQUFLO0dBQ0wsS0FBSztHQUNMLEtBQUs7R0FDTCxLQUFLO0dBQ0wsS0FBSztHQUNMLE1BQU07R0FDTixLQUFLO0dBQ0wsS0FBSztHQUNMLEtBQUs7OztZQUVHLEdBQUcsSUFBSSxVQUFVLENBQUMsR0FBRyxHQUFHLENBQUMsTUFDakMsR0FBRyxRQUFRLElBQUksR0FBRyxXQUFXLEtBQUssRUFBRSxHQUFHLEdBQUc7OztPQUl4QyxnQkFBZ0IsR0FBRyxnQkFBZ0I7TUFDbkMsTUFBTSxHQUFHLEVBQUU7O0VBQ2YsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLEdBQUc7SUFDeEIsTUFBTSxHQUFHLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxJQUFJLEtBQUs7SUFDbkQsTUFBTSxHQUFHLGdCQUFnQjs7U0FDdkIsTUFBTTs7Ozs7Ozs7O3dEQXVDcUIsVUFBVSxHQUFHLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
