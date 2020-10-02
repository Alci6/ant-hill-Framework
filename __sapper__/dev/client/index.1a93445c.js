import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, D as validate_each_argument, v as validate_slots, e as element, t as text, a as space, c as claim_element, b as children, f as claim_text, g as detach_dev, h as claim_space, k as attr_dev, j as add_location, l as insert_dev, m as append_dev, o as create_component, q as query_selector_all, p as claim_component, r as mount_component, u as transition_in, w as transition_out, x as destroy_component, E as destroy_each, n as noop } from './client.54225082.js';
import { N as Nav_horizontal, p as posts } from './posts.5066773f.js';

/* src/routes/blog/index.svelte generated by Svelte v3.28.0 */
const file = "src/routes/blog/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[3] = list[i];
	return child_ctx;
}

// (102:8) {#if post.description}
function create_if_block_1(ctx) {
	let p;
	let t_value = /*shortDescription*/ ctx[2](/*post*/ ctx[3].description) + "";
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
			attr_dev(p, "class", "ph3 post-description svelte-13cxous");
			add_location(p, file, 102, 10, 1996);
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
		source: "(102:8) {#if post.description}",
		ctx
	});

	return block;
}

// (108:8) {#if post.date}
function create_if_block(ctx) {
	let p;
	let t_value = /*dateTransformer*/ ctx[1](/*post*/ ctx[3].date) + "";
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
			add_location(p, file, 108, 10, 2142);
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
		source: "(108:8) {#if post.date}",
		ctx
	});

	return block;
}

// (92:2) {#each postsOrdered as post}
function create_each_block(ctx) {
	let a;
	let div;
	let h1;
	let t0_value = /*post*/ ctx[3].title + "";
	let t0;
	let t1;
	let t2;
	let t3;
	let a_href_value;
	let if_block0 = /*post*/ ctx[3].description && create_if_block_1(ctx);
	let if_block1 = /*post*/ ctx[3].date && create_if_block(ctx);

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
			attr_dev(h1, "class", "f3 lh-copy courier mb0 ph3 pt3 underline-hover title-card link svelte-13cxous");
			add_location(h1, file, 96, 8, 1831);
			attr_dev(div, "class", " center-m post-card w-60-ns w-80-m w-100 shadow-4 br3 svelte-13cxous");
			add_location(div, file, 94, 6, 1754);
			attr_dev(a, "rel", "prefetch");
			attr_dev(a, "href", a_href_value = `/blog/${/*post*/ ctx[3].permalink}`);
			attr_dev(a, "class", "svelte-13cxous");
			add_location(a, file, 92, 4, 1695);
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
			if (/*post*/ ctx[3].description) if_block0.p(ctx, dirty);
			if (/*post*/ ctx[3].date) if_block1.p(ctx, dirty);
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
		source: "(92:2) {#each postsOrdered as post}",
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
	navhorizontal = new Nav_horizontal({ $$inline: true });
	let each_value = /*postsOrdered*/ ctx[0];
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
			attr_dev(h2, "class", "tl-l tc");
			add_location(h2, file, 89, 2, 1616);
			attr_dev(main, "class", "sections");
			add_location(main, file, 86, 0, 1586);
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
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*postsOrdered, dateTransformer, shortDescription*/ 7) {
				each_value = /*postsOrdered*/ ctx[0];
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

	$$self.$capture_state = () => ({
		NavHorizontal: Nav_horizontal,
		posts,
		postsOrdered,
		dateTransformer,
		shortDescription
	});

	$$self.$inject_state = $$props => {
		if ("postsOrdered" in $$props) $$invalidate(0, postsOrdered = $$props.postsOrdered);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [postsOrdered, dateTransformer, shortDescription];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMWE5MzQ0NWMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYmxvZy9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IE5hdkhvcml6b250YWwgZnJvbSAnLi8uLi8uLi9jb21wb25lbnRzL05hdi1ob3Jpem9udGFsLnN2ZWx0ZSc7XG4gIGltcG9ydCB7IHBvc3RzIH0gZnJvbSBcIi4uLy4uL3Bvc3RzXCI7XG4gIFxuICBcblxuICAvLyBPcmRlciBQb3N0IGJ5IHJlY2VudFxuICBsZXQgcG9zdHNPcmRlcmVkID0gcG9zdHMuc29ydCgoYSwgYikgPT4ge1xuICAgIGEgPSBhLmRhdGVcbiAgICAgIC5zcGxpdChcIi9cIilcbiAgICAgIC5yZXZlcnNlKClcbiAgICAgIC5qb2luKFwiXCIpO1xuICAgIGIgPSBiLmRhdGVcbiAgICAgIC5zcGxpdChcIi9cIilcbiAgICAgIC5yZXZlcnNlKClcbiAgICAgIC5qb2luKFwiXCIpO1xuXG4gICAgcmV0dXJuIGEgPCBiID8gMSA6IGEgPiBiID8gLTEgOiAwO1xuICB9KTtcblxuICBjb25zdCBkYXRlVHJhbnNmb3JtZXIgPSBpbnB1dERhdGUgPT4ge1xuICAgIGxldCBhcnJheURhdGUgPSBpbnB1dERhdGUuc3BsaXQoXCIvXCIpO1xuICAgIGxldCByZXZlcnNlRGF0ZSA9IGFycmF5RGF0ZS5yZXZlcnNlKCk7XG4gICAgbGV0IGRpYSA9IGFycmF5RGF0ZVsyXTtcbiAgICBsZXQgbWVzID0gYXJyYXlEYXRlWzFdID09IDAgPyBhcnJheURhdGVbMV0uc3Vic3RyaW5nKDEpIDogYXJyYXlEYXRlWzFdO1xuICAgIGxldCBhw7FvID0gYXJyYXlEYXRlWzBdO1xuXG4gICAgY29uc3QgYXJyYXlNZXNlcyA9IFtcbiAgICAgIFwiZW5lXCIsXG4gICAgICBcImZlYlwiLFxuICAgICAgXCJtYXJcIixcbiAgICAgIFwiYWJyXCIsXG4gICAgICBcIm1heVwiLFxuICAgICAgXCJqdW5cIixcbiAgICAgIFwianVsXCIsXG4gICAgICBcImFnb1wiLFxuICAgICAgXCJzZXB0XCIsXG4gICAgICBcIm9jdFwiLFxuICAgICAgXCJub3ZcIixcbiAgICAgIFwiZGljXCJcbiAgICBdO1xuICAgIHJldHVybiBgJHtkaWF9ICR7YXJyYXlNZXNlc1ttZXMgLSAxXX0uICR7XG4gICAgICBhw7FvID09IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSA/IFwiXCIgOiBhw7FvXG4gICAgfWA7XG4gIH07XG5cbiAgY29uc3Qgc2hvcnREZXNjcmlwdGlvbiA9IGlucHV0RGVzY3JpcHRpb24gPT4ge1xuICAgIGxldCBvdXRwdXQgPSBcIlwiO1xuICAgIGlucHV0RGVzY3JpcHRpb24ubGVuZ3RoID4gMTQwXG4gICAgICA/IChvdXRwdXQgPSBpbnB1dERlc2NyaXB0aW9uLnN1YnN0cmluZygwLCAxNDApICsgXCIuLi5cIilcbiAgICAgIDogKG91dHB1dCA9IGlucHV0RGVzY3JpcHRpb24pO1xuICAgIHJldHVybiBvdXRwdXQ7XG4gIH07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAucG9zdC1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBtaW4taGVpZ2h0OiA4dmg7XG4gIH1cblxuICAudGl0bGUtY2FyZDpob3ZlciB7XG4gICAgY29sb3I6ICNmZjdkODc7XG4gIH1cblxuICAudGl0bGUtY2FyZDpmb2N1cyB7XG4gICAgY29sb3I6ICNmZjdkODc7XG4gIH1cblxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NGVtKSB7XG4gICAgLnBvc3QtZGVzY3JpcHRpb24ge1xuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIH1cbiAgfVxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuICA8dGl0bGU+QW50IEhpbGwgfCBCbG9nPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxOYXZIb3Jpem9udGFsIC8+XG48bWFpbiBjbGFzcz1cInNlY3Rpb25zXCI+XG4gIFxuXG4gIDxoMiBjbGFzcz1cInRsLWwgdGNcIj7Dmmx0aW1vcyBhcnTDrWN1bG9zPC9oMj5cblxuICB7I2VhY2ggcG9zdHNPcmRlcmVkIGFzIHBvc3R9XG4gICAgPGEgcmVsPVwicHJlZmV0Y2hcIiBocmVmPXtgL2Jsb2cvJHtwb3N0LnBlcm1hbGlua31gfT5cblxuICAgICAgPGRpdiBjbGFzcz1cIiBjZW50ZXItbSBwb3N0LWNhcmQgdy02MC1ucyB3LTgwLW0gdy0xMDAgc2hhZG93LTQgYnIzXCI+XG5cbiAgICAgICAgPGgxXG4gICAgICAgICAgY2xhc3M9XCJmMyBsaC1jb3B5IGNvdXJpZXIgbWIwIHBoMyBwdDMgdW5kZXJsaW5lLWhvdmVyIHRpdGxlLWNhcmQgbGlua1wiPlxuICAgICAgICAgIHtwb3N0LnRpdGxlfVxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIHsjaWYgcG9zdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICA8cCBjbGFzcz1cInBoMyBwb3N0LWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICB7c2hvcnREZXNjcmlwdGlvbihwb3N0LmRlc2NyaXB0aW9uKX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIHsvaWZ9XG5cbiAgICAgICAgeyNpZiBwb3N0LmRhdGV9XG4gICAgICAgICAgPHAgY2xhc3M9XCIgbWExIHBiMiBwcjIgdHIgZjYgZ3JheSBsaC1jb3B5IGNvdXJpZXJcIj5cbiAgICAgICAgICAgIHtkYXRlVHJhbnNmb3JtZXIocG9zdC5kYXRlKX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIHsvaWZ9XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvYT5cbiAgey9lYWNofVxuXG4gIFxuXG48L21haW4+XG5cblxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztvQ0F1R2EsR0FBZ0IsYUFBQyxHQUFJLElBQUMsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBTWpDLEdBQWUsYUFBQyxHQUFJLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5QkFYM0IsR0FBSSxJQUFDLEtBQUs7Ozs7OzswQkFHUixHQUFJLElBQUMsV0FBVzswQkFNaEIsR0FBSSxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3REFmZSxHQUFJLElBQUMsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztnQkFTdEMsR0FBSSxJQUFDLFdBQVc7Z0JBTWhCLEdBQUksSUFBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBaEJiLEdBQVk7Ozs7Z0NBQWpCLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUFDLEdBQVk7Ozs7K0JBQWpCLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBcEZGLFlBQVksR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDO0VBQ2pDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUNQLEtBQUssQ0FBQyxHQUFHLEVBQ1QsT0FBTyxHQUNQLElBQUksQ0FBQyxFQUFFO0VBQ1YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQ1AsS0FBSyxDQUFDLEdBQUcsRUFDVCxPQUFPLEdBQ1AsSUFBSSxDQUFDLEVBQUU7U0FFSCxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDOzs7T0FHN0IsZUFBZSxHQUFHLFNBQVM7TUFDM0IsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRztNQUMvQixXQUFXLEdBQUcsU0FBUyxDQUFDLE9BQU87TUFDL0IsR0FBRyxHQUFHLFNBQVMsQ0FBQyxDQUFDOztNQUNqQixHQUFHLEdBQUcsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQUcsU0FBUyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUFJLFNBQVMsQ0FBQyxDQUFDOztNQUNqRSxHQUFHLEdBQUcsU0FBUyxDQUFDLENBQUM7O1FBRWYsVUFBVTtHQUNkLEtBQUs7R0FDTCxLQUFLO0dBQ0wsS0FBSztHQUNMLEtBQUs7R0FDTCxLQUFLO0dBQ0wsS0FBSztHQUNMLEtBQUs7R0FDTCxLQUFLO0dBQ0wsTUFBTTtHQUNOLEtBQUs7R0FDTCxLQUFLO0dBQ0wsS0FBSzs7O1lBRUcsR0FBRyxJQUFJLFVBQVUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUNqQyxHQUFHLFFBQVEsSUFBSSxHQUFHLFdBQVcsS0FBSyxFQUFFLEdBQUcsR0FBRzs7O09BSXhDLGdCQUFnQixHQUFHLGdCQUFnQjtNQUNuQyxNQUFNLEdBQUcsRUFBRTs7RUFDZixnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsR0FBRztJQUN4QixNQUFNLEdBQUcsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLElBQUksS0FBSztJQUNuRCxNQUFNLEdBQUcsZ0JBQWdCOztTQUN2QixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
