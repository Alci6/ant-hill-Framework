import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, D as validate_each_argument, v as validate_slots, e as element, t as text, a as space, c as claim_element, b as children, f as claim_text, g as detach_dev, h as claim_space, k as attr_dev, j as add_location, l as insert_dev, m as append_dev, o as create_component, q as query_selector_all, p as claim_component, r as mount_component, u as transition_in, w as transition_out, x as destroy_component, E as destroy_each, n as noop } from './client.6046626b.js';
import './index.04f1663b.js';
import { N as Nav_horizontal, p as posts } from './posts.8d94f33d.js';

/* src/routes/blog/index.svelte generated by Svelte v3.28.0 */
const file = "src/routes/blog/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[3] = list[i];
	return child_ctx;
}

// (110:8) {#if post.description}
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
			attr_dev(p, "class", "ph3 post-description lookhere w-90 f5-m f4-l f5-ns f5 svelte-elh90n");
			add_location(p, file, 110, 10, 2090);
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
		source: "(110:8) {#if post.description}",
		ctx
	});

	return block;
}

// (116:8) {#if post.date}
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
			add_location(p, file, 116, 10, 2269);
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
		source: "(116:8) {#if post.date}",
		ctx
	});

	return block;
}

// (98:2) {#each postsOrdered as post}
function create_each_block(ctx) {
	let div1;
	let a;
	let div0;
	let h1;
	let t0_value = /*post*/ ctx[3].title + "";
	let t0;
	let t1;
	let t2;
	let a_href_value;
	let t3;
	let if_block0 = /*post*/ ctx[3].description && create_if_block_1(ctx);
	let if_block1 = /*post*/ ctx[3].date && create_if_block(ctx);

	const block = {
		c: function create() {
			div1 = element("div");
			a = element("a");
			div0 = element("div");
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
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			a = claim_element(div1_nodes, "A", { rel: true, href: true, class: true });
			var a_nodes = children(a);
			div0 = claim_element(a_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h1 = claim_element(div0_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, t0_value);
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(div0_nodes);
			if (if_block0) if_block0.l(div0_nodes);
			t2 = claim_space(div0_nodes);
			if (if_block1) if_block1.l(div0_nodes);
			div0_nodes.forEach(detach_dev);
			a_nodes.forEach(detach_dev);
			t3 = claim_space(div1_nodes);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "f4-m f3-l f4-ns f5 lh-copy courier mb0 ph3 pt3 underline-hover title-card link svelte-elh90n");
			add_location(h1, file, 104, 8, 1909);
			attr_dev(div0, "class", "  post-card  shadow-4 br3 svelte-elh90n");
			add_location(div0, file, 102, 6, 1860);
			attr_dev(a, "rel", "prefetch");
			attr_dev(a, "href", a_href_value = `/blog/${/*post*/ ctx[3].permalink}`);
			attr_dev(a, "class", "svelte-elh90n");
			add_location(a, file, 100, 4, 1801);
			attr_dev(div1, "class", "w-60-ns w-80-m  w-90-l w-100 center-m");
			add_location(div1, file, 99, 2, 1744);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, a);
			append_dev(a, div0);
			append_dev(div0, h1);
			append_dev(h1, t0);
			append_dev(div0, t1);
			if (if_block0) if_block0.m(div0, null);
			append_dev(div0, t2);
			if (if_block1) if_block1.m(div0, null);
			append_dev(div1, t3);
		},
		p: function update(ctx, dirty) {
			if (/*post*/ ctx[3].description) if_block0.p(ctx, dirty);
			if (/*post*/ ctx[3].date) if_block1.p(ctx, dirty);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
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
			attr_dev(h2, "class", "tl-l tc intro svelte-elh90n");
			add_location(h2, file, 95, 2, 1660);
			attr_dev(main, "class", "sections");
			add_location(main, file, 92, 0, 1629);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMjFiMDM2MDAuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYmxvZy9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0XG5cdGltcG9ydCBOYXZIb3Jpem9udGFsIGZyb20gJy4vLi4vLi4vY29tcG9uZW50cy9OYXYtaG9yaXpvbnRhbC5zdmVsdGUnO1xuICBpbXBvcnQgeyBwb3N0cyB9IGZyb20gXCIuLi8uLi9wb3N0c1wiO1xuICBcbiAgXG4gIFxuXG4gIC8vIE9yZGVyIFBvc3QgYnkgcmVjZW50XG4gIGxldCBwb3N0c09yZGVyZWQgPSBwb3N0cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgYSA9IGEuZGF0ZVxuICAgICAgLnNwbGl0KFwiL1wiKVxuICAgICAgLnJldmVyc2UoKVxuICAgICAgLmpvaW4oXCJcIik7XG4gICAgYiA9IGIuZGF0ZVxuICAgICAgLnNwbGl0KFwiL1wiKVxuICAgICAgLnJldmVyc2UoKVxuICAgICAgLmpvaW4oXCJcIik7XG5cbiAgICByZXR1cm4gYSA8IGIgPyAxIDogYSA+IGIgPyAtMSA6IDA7XG4gIH0pO1xuXG4gIGNvbnN0IGRhdGVUcmFuc2Zvcm1lciA9IGlucHV0RGF0ZSA9PiB7XG4gICAgbGV0IGFycmF5RGF0ZSA9IGlucHV0RGF0ZS5zcGxpdChcIi9cIik7XG4gICAgbGV0IHJldmVyc2VEYXRlID0gYXJyYXlEYXRlLnJldmVyc2UoKTtcbiAgICBsZXQgZGlhID0gYXJyYXlEYXRlWzJdO1xuICAgIGxldCBtZXMgPSBhcnJheURhdGVbMV0gPT0gMCA/IGFycmF5RGF0ZVsxXS5zdWJzdHJpbmcoMSkgOiBhcnJheURhdGVbMV07XG4gICAgbGV0IGHDsW8gPSBhcnJheURhdGVbMF07XG5cbiAgICBjb25zdCBhcnJheU1lc2VzID0gW1xuICAgICAgXCJlbmVcIixcbiAgICAgIFwiZmViXCIsXG4gICAgICBcIm1hclwiLFxuICAgICAgXCJhYnJcIixcbiAgICAgIFwibWF5XCIsXG4gICAgICBcImp1blwiLFxuICAgICAgXCJqdWxcIixcbiAgICAgIFwiYWdvXCIsXG4gICAgICBcInNlcHRcIixcbiAgICAgIFwib2N0XCIsXG4gICAgICBcIm5vdlwiLFxuICAgICAgXCJkaWNcIlxuICAgIF07XG4gICAgcmV0dXJuIGAke2RpYX0gJHthcnJheU1lc2VzW21lcyAtIDFdfS4gJHtcbiAgICAgIGHDsW8gPT0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpID8gXCJcIiA6IGHDsW9cbiAgICB9YDtcbiAgfTtcblxuICBjb25zdCBzaG9ydERlc2NyaXB0aW9uID0gaW5wdXREZXNjcmlwdGlvbiA9PiB7XG4gICAgbGV0IG91dHB1dCA9IFwiXCI7XG4gICAgaW5wdXREZXNjcmlwdGlvbi5sZW5ndGggPiAxNDBcbiAgICAgID8gKG91dHB1dCA9IGlucHV0RGVzY3JpcHRpb24uc3Vic3RyaW5nKDAsIDE0MCkgKyBcIi4uLlwiKVxuICAgICAgOiAob3V0cHV0ID0gaW5wdXREZXNjcmlwdGlvbik7XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIC5wb3N0LWNhcmQge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIG1pbi1oZWlnaHQ6IDh2aDtcbiAgfVxuXG4gIC50aXRsZS1jYXJkOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmN2Q4NztcbiAgfVxuXG4gIC50aXRsZS1jYXJkOmZvY3VzIHtcbiAgICBjb2xvcjogI2ZmN2Q4NztcbiAgfVxuXG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzMzMzMzMztcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0ZW0pIHtcbiAgICAucG9zdC1kZXNjcmlwdGlvbiB7XG4gICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgfVxuICB9XG5cbiAgIC5pbnRyb3tcbiAgICBtYXJnaW4tdG9wOiA2cmVtO1xuICB9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG4gIDx0aXRsZT5BbnQgSGlsbCB8IEJsb2c8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPE5hdkhvcml6b250YWwgLz5cbjxtYWluIGNsYXNzPVwic2VjdGlvbnNcIiA+XG4gIFxuXG4gIDxoMiBjbGFzcz1cInRsLWwgdGMgaW50cm9cIj7Dmmx0aW1vcyBhcnTDrWN1bG9zPC9oMj5cblxuICB7I2VhY2ggcG9zdHNPcmRlcmVkIGFzIHBvc3R9XG5cbiAgPGRpdiBjbGFzcz1cInctNjAtbnMgdy04MC1tICB3LTkwLWwgdy0xMDAgY2VudGVyLW1cIj4gXG4gICAgPGEgcmVsPVwicHJlZmV0Y2hcIiBocmVmPXtgL2Jsb2cvJHtwb3N0LnBlcm1hbGlua31gfT5cblxuICAgICAgPGRpdiBjbGFzcz1cIiAgcG9zdC1jYXJkICBzaGFkb3ctNCBicjNcIj5cblxuICAgICAgICA8aDFcbiAgICAgICAgICBjbGFzcz1cImY0LW0gZjMtbCBmNC1ucyBmNSBsaC1jb3B5IGNvdXJpZXIgbWIwIHBoMyBwdDMgdW5kZXJsaW5lLWhvdmVyIHRpdGxlLWNhcmQgbGlua1wiPlxuICAgICAgICAgIHtwb3N0LnRpdGxlfVxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIHsjaWYgcG9zdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICA8cCBjbGFzcz1cInBoMyBwb3N0LWRlc2NyaXB0aW9uIGxvb2toZXJlIHctOTAgZjUtbSBmNC1sIGY1LW5zIGY1XCI+XG4gICAgICAgICAgICB7c2hvcnREZXNjcmlwdGlvbihwb3N0LmRlc2NyaXB0aW9uKX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIHsvaWZ9XG5cbiAgICAgICAgeyNpZiBwb3N0LmRhdGV9XG4gICAgICAgICAgPHAgY2xhc3M9XCIgbWExIHBiMiBwcjIgdHIgZjYgZ3JheSBsaC1jb3B5IGNvdXJpZXJcIj5cbiAgICAgICAgICAgIHtkYXRlVHJhbnNmb3JtZXIocG9zdC5kYXRlKX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIHsvaWZ9XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgey9lYWNofVxuXG4gIFxuXG48L21haW4+XG5cblxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBK0dhLEdBQWdCLGFBQUMsR0FBSSxJQUFDLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQU1qQyxHQUFlLGFBQUMsR0FBSSxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lCQVgzQixHQUFJLElBQUMsS0FBSzs7Ozs7OzBCQUdSLEdBQUksSUFBQyxXQUFXOzBCQU1oQixHQUFJLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3REFmZSxHQUFJLElBQUMsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFTdEMsR0FBSSxJQUFDLFdBQVc7Z0JBTWhCLEdBQUksSUFBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBbEJiLEdBQVk7Ozs7Z0NBQWpCLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUFDLEdBQVk7Ozs7K0JBQWpCLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBeEZGLFlBQVksR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDO0VBQ2pDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUNQLEtBQUssQ0FBQyxHQUFHLEVBQ1QsT0FBTyxHQUNQLElBQUksQ0FBQyxFQUFFO0VBQ1YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQ1AsS0FBSyxDQUFDLEdBQUcsRUFDVCxPQUFPLEdBQ1AsSUFBSSxDQUFDLEVBQUU7U0FFSCxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDOzs7T0FHN0IsZUFBZSxHQUFHLFNBQVM7TUFDM0IsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRztNQUMvQixXQUFXLEdBQUcsU0FBUyxDQUFDLE9BQU87TUFDL0IsR0FBRyxHQUFHLFNBQVMsQ0FBQyxDQUFDOztNQUNqQixHQUFHLEdBQUcsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQUcsU0FBUyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUFJLFNBQVMsQ0FBQyxDQUFDOztNQUNqRSxHQUFHLEdBQUcsU0FBUyxDQUFDLENBQUM7O1FBRWYsVUFBVTtHQUNkLEtBQUs7R0FDTCxLQUFLO0dBQ0wsS0FBSztHQUNMLEtBQUs7R0FDTCxLQUFLO0dBQ0wsS0FBSztHQUNMLEtBQUs7R0FDTCxLQUFLO0dBQ0wsTUFBTTtHQUNOLEtBQUs7R0FDTCxLQUFLO0dBQ0wsS0FBSzs7O1lBRUcsR0FBRyxJQUFJLFVBQVUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUNqQyxHQUFHLFFBQVEsSUFBSSxHQUFHLFdBQVcsS0FBSyxFQUFFLEdBQUcsR0FBRzs7O09BSXhDLGdCQUFnQixHQUFHLGdCQUFnQjtNQUNuQyxNQUFNLEdBQUcsRUFBRTs7RUFDZixnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsR0FBRztJQUN4QixNQUFNLEdBQUcsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLElBQUksS0FBSztJQUNuRCxNQUFNLEdBQUcsZ0JBQWdCOztTQUN2QixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
