import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, z as validate_each_argument, v as validate_slots, e as element, t as text, a as space, c as claim_element, b as children, f as claim_text, g as detach_dev, h as claim_space, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, A as set_data_dev, o as create_component, q as query_selector_all, p as claim_component, r as mount_component, u as transition_in, w as transition_out, x as destroy_component, B as destroy_each } from './client.c8cbe3b0.js';
import { _ as _1_Title } from './1-Title.231f712b.js';

/* src/routes/blog/index.svelte generated by Svelte v3.26.0 */
const file = "src/routes/blog/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[3] = list[i];
	return child_ctx;
}

// (126:8) {#if post.description}
function create_if_block_1(ctx) {
	let p;
	let t_value = /*shortDescription*/ ctx[1](/*post*/ ctx[3].description) + "";
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
			attr_dev(p, "class", "ph3");
			add_location(p, file, 126, 10, 2364);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			append_dev(p, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*posts*/ 1 && t_value !== (t_value = /*shortDescription*/ ctx[1](/*post*/ ctx[3].description) + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(126:8) {#if post.description}",
		ctx
	});

	return block;
}

// (130:8) {#if post.date}
function create_if_block(ctx) {
	let p;
	let t_value = /*dateTransformer*/ ctx[2](/*post*/ ctx[3].date) + "";
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
			add_location(p, file, 130, 10, 2469);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			append_dev(p, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*posts*/ 1 && t_value !== (t_value = /*dateTransformer*/ ctx[2](/*post*/ ctx[3].date) + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(130:8) {#if post.date}",
		ctx
	});

	return block;
}

// (116:2) {#each posts as post}
function create_each_block(ctx) {
	let a;
	let div;
	let h2;
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
			h2 = element("h2");
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
			h2 = claim_element(div_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, t0_value);
			h2_nodes.forEach(detach_dev);
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
			attr_dev(h2, "class", "f3 lh-copy courier mb0 ph3 pt3 underline-hover title-card link svelte-1qot8yx");
			add_location(h2, file, 120, 8, 2199);
			attr_dev(div, "class", "post-card w-60 shadow-4 br3 svelte-1qot8yx");
			add_location(div, file, 118, 6, 2148);
			attr_dev(a, "rel", "prefetch");
			attr_dev(a, "href", a_href_value = "blog/" + /*post*/ ctx[3].slug);
			attr_dev(a, "class", "svelte-1qot8yx");
			add_location(a, file, 116, 4, 2098);
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);
			append_dev(a, div);
			append_dev(div, h2);
			append_dev(h2, t0);
			append_dev(div, t1);
			if (if_block0) if_block0.m(div, null);
			append_dev(div, t2);
			if (if_block1) if_block1.m(div, null);
			append_dev(a, t3);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*posts*/ 1 && t0_value !== (t0_value = /*post*/ ctx[3].title + "")) set_data_dev(t0, t0_value);

			if (/*post*/ ctx[3].description) {
				if (if_block0) {
					if_block0.p(ctx, dirty);
				} else {
					if_block0 = create_if_block_1(ctx);
					if_block0.c();
					if_block0.m(div, t2);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (/*post*/ ctx[3].date) {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					if_block1.m(div, null);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if (dirty & /*posts*/ 1 && a_href_value !== (a_href_value = "blog/" + /*post*/ ctx[3].slug)) {
				attr_dev(a, "href", a_href_value);
			}
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
		source: "(116:2) {#each posts as post}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let main;
	let title;
	let t1;
	let h2;
	let t2;
	let t3;
	let current;
	title = new _1_Title({ $$inline: true });
	let each_value = /*posts*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			t0 = space();
			main = element("main");
			create_component(title.$$.fragment);
			t1 = space();
			h2 = element("h2");
			t2 = text("Últimos artículos");
			t3 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-10h7psl\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			main = claim_element(nodes, "MAIN", { class: true });
			var main_nodes = children(main);
			claim_component(title.$$.fragment, main_nodes);
			t1 = claim_space(main_nodes);
			h2 = claim_element(main_nodes, "H2", {});
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
			document.title = "Blog";
			add_location(h2, file, 113, 2, 2042);
			attr_dev(main, "class", "sections svelte-1qot8yx");
			add_location(main, file, 110, 0, 2003);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, main, anchor);
			mount_component(title, main, null);
			append_dev(main, t1);
			append_dev(main, h2);
			append_dev(h2, t2);
			append_dev(main, t3);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(main, null);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*posts, dateTransformer, shortDescription*/ 7) {
				each_value = /*posts*/ ctx[0];
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
			transition_in(title.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(title.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(main);
			destroy_component(title);
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

function preload() {
	return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
		return { posts };
	});
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Blog", slots, []);
	let { posts } = $$props;

	const shortDescription = inputDescription => {
		let output = "";

		inputDescription.length > 140
		? output = inputDescription.substring(0, 140) + "..."
		: output = inputDescription;

		return output;
	};

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

	const writable_props = ["posts"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Blog> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
	};

	$$self.$capture_state = () => ({
		preload,
		posts,
		Title: _1_Title,
		shortDescription,
		dateTransformer
	});

	$$self.$inject_state = $$props => {
		if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [posts, shortDescription, dateTransformer];
}

class Blog extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { posts: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Blog",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*posts*/ ctx[0] === undefined && !("posts" in props)) {
			console.warn("<Blog> was created without expected prop 'posts'");
		}
	}

	get posts() {
		throw new Error("<Blog>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set posts(value) {
		throw new Error("<Blog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Blog;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguN2JlNTVlN2UuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYmxvZy9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG4gIGV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkKCkge1xuICAgIHJldHVybiB0aGlzLmZldGNoKGBibG9nLmpzb25gKVxuICAgICAgLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICAgIC50aGVuKHBvc3RzID0+IHtcbiAgICAgICAgcmV0dXJuIHsgcG9zdHMgfTtcbiAgICAgIH0pO1xuICB9XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cbiAgZXhwb3J0IGxldCBwb3N0cztcblxuICAvLyBwb3N0cyA9IHBvc3RzLnNvcnQoKGEsIGIpID0+IHtcbiAgLy8gICBpZiAoYS5kYXRlICYmIGIuZGF0ZSkge1xuICAvLyAgICAgYS5kYXRlXG4gIC8vICAgICAgIC5zcGxpdChcIi9cIilcbiAgLy8gICAgICAgLnJldmVyc2UoKVxuICAvLyAgICAgICAuam9pbihcIi9cIikgPFxuICAvLyAgICAgYi5kYXRlXG4gIC8vICAgICAgIC5zcGxpdChcIi9cIilcbiAgLy8gICAgICAgLnJldmVyc2UoKVxuICAvLyAgICAgICAuam9pbihcIi9cIilcbiAgLy8gICAgICAgPyAtMVxuICAvLyAgICAgICA6IDE7XG4gIC8vICAgfVxuICAvLyB9KTtcblxuICBpbXBvcnQgVGl0bGUgZnJvbSBcIi4vLi4vLi4vY29tcG9uZW50cy8xLVRpdGxlLnN2ZWx0ZVwiO1xuXG4gIGNvbnN0IHNob3J0RGVzY3JpcHRpb24gPSBpbnB1dERlc2NyaXB0aW9uID0+IHtcbiAgICBsZXQgb3V0cHV0ID0gXCJcIjtcbiAgICBpbnB1dERlc2NyaXB0aW9uLmxlbmd0aCA+IDE0MFxuICAgICAgPyAob3V0cHV0ID0gaW5wdXREZXNjcmlwdGlvbi5zdWJzdHJpbmcoMCwgMTQwKSArIFwiLi4uXCIpXG4gICAgICA6IChvdXRwdXQgPSBpbnB1dERlc2NyaXB0aW9uKTtcbiAgICByZXR1cm4gb3V0cHV0O1xuICB9O1xuXG4gIGNvbnN0IGRhdGVUcmFuc2Zvcm1lciA9IGlucHV0RGF0ZSA9PiB7XG4gICAgbGV0IGFycmF5RGF0ZSA9IGlucHV0RGF0ZS5zcGxpdChcIi9cIik7XG4gICAgbGV0IHJldmVyc2VEYXRlID0gYXJyYXlEYXRlLnJldmVyc2UoKTtcbiAgICBsZXQgZGlhID0gYXJyYXlEYXRlWzJdO1xuICAgIGxldCBtZXMgPSBhcnJheURhdGVbMV0gPT0gMCA/IGFycmF5RGF0ZVsxXS5zdWJzdHJpbmcoMSkgOiBhcnJheURhdGVbMV07XG4gICAgbGV0IGHDsW8gPSBhcnJheURhdGVbMF07XG5cbiAgICBjb25zdCBhcnJheU1lc2VzID0gW1xuICAgICAgXCJlbmVcIixcbiAgICAgIFwiZmViXCIsXG4gICAgICBcIm1hclwiLFxuICAgICAgXCJhYnJcIixcbiAgICAgIFwibWF5XCIsXG4gICAgICBcImp1blwiLFxuICAgICAgXCJqdWxcIixcbiAgICAgIFwiYWdvXCIsXG4gICAgICBcInNlcHRcIixcbiAgICAgIFwib2N0XCIsXG4gICAgICBcIm5vdlwiLFxuICAgICAgXCJkaWNcIlxuICAgIF07XG4gICAgcmV0dXJuIGAke2RpYX0gJHthcnJheU1lc2VzW21lcyAtIDFdfS4gJHtcbiAgICAgIGHDsW8gPT0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpID8gXCJcIiA6IGHDsW9cbiAgICB9YDtcbiAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIC8qIFNtYWxsIHNjcmVlbnMgKi9cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5zZWN0aW9ucyB7XG4gICAgICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgICB9XG4gIH1cblxuICAvKiBMYXJnZSBzY3JlZW5zICovXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICAuc2VjdGlvbnMge1xuICAgICAgbWFyZ2luLWxlZnQ6IDNyZW07XG4gICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gICAgfVxuICB9XG5cbiAgLnNlY3Rpb25zIHtcbiAgICBtYXJnaW4tbGVmdDogM3JlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gIH1cblxuICAucG9zdC1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBtaW4taGVpZ2h0OiA4dmg7XG4gIH1cblxuICAudGl0bGUtY2FyZDpob3ZlciB7XG4gICAgY29sb3I6ICNmZjdkODc7XG4gIH1cblxuICAudGl0bGUtY2FyZDpmb2N1cyB7XG4gICAgY29sb3I6ICNmZjdkODc7XG4gIH1cblxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gIH1cbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cbiAgPHRpdGxlPkJsb2c8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPG1haW4gY2xhc3M9XCJzZWN0aW9uc1wiPlxuICA8VGl0bGUgLz5cblxuICA8aDI+w5psdGltb3MgYXJ0w61jdWxvczwvaDI+XG5cbiAgeyNlYWNoIHBvc3RzIGFzIHBvc3R9XG4gICAgPGEgcmVsPVwicHJlZmV0Y2hcIiBocmVmPVwiYmxvZy97cG9zdC5zbHVnfVwiPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwicG9zdC1jYXJkIHctNjAgc2hhZG93LTQgYnIzXCI+XG5cbiAgICAgICAgPGgyXG4gICAgICAgICAgY2xhc3M9XCJmMyBsaC1jb3B5IGNvdXJpZXIgbWIwIHBoMyBwdDMgdW5kZXJsaW5lLWhvdmVyIHRpdGxlLWNhcmQgbGlua1wiPlxuICAgICAgICAgIHtwb3N0LnRpdGxlfVxuICAgICAgICA8L2gyPlxuXG4gICAgICAgIHsjaWYgcG9zdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICA8cCBjbGFzcz1cInBoM1wiPntzaG9ydERlc2NyaXB0aW9uKHBvc3QuZGVzY3JpcHRpb24pfTwvcD5cbiAgICAgICAgey9pZn1cblxuICAgICAgICB7I2lmIHBvc3QuZGF0ZX1cbiAgICAgICAgICA8cCBjbGFzcz1cIiBtYTEgcGIyIHByMiB0ciBmNiBncmF5IGxoLWNvcHkgY291cmllclwiPlxuICAgICAgICAgICAge2RhdGVUcmFuc2Zvcm1lcihwb3N0LmRhdGUpfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgey9pZn1cblxuICAgICAgPC9kaXY+XG4gICAgPC9hPlxuICB7L2VhY2h9XG5cbjwvbWFpbj5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7b0NBOEgwQixHQUFnQixhQUFDLEdBQUksSUFBQyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBFQUFqQyxHQUFnQixhQUFDLEdBQUksSUFBQyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBSzlDLEdBQWUsYUFBQyxHQUFJLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5RUFBekIsR0FBZSxhQUFDLEdBQUksSUFBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5QkFUM0IsR0FBSSxJQUFDLEtBQUs7Ozs7OzswQkFHUixHQUFJLElBQUMsV0FBVzswQkFJaEIsR0FBSSxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5REFiWSxHQUFJLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7OztnRUFNaEMsR0FBSSxJQUFDLEtBQUs7O2dCQUdSLEdBQUksSUFBQyxXQUFXOzs7Ozs7Ozs7Ozs7O2dCQUloQixHQUFJLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7OztrRkFiWSxHQUFJLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBRGxDLEdBQUs7Ozs7Z0NBQVYsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkFBQyxHQUFLOzs7OytCQUFWLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQWxIVSxPQUFPO1FBQ2QsSUFBSSxDQUFDLEtBQUssY0FDZCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQ2hCLElBQUksQ0FBQyxLQUFLO1dBQ0EsS0FBSzs7Ozs7OztPQU1ULEtBQUs7O09BbUJWLGdCQUFnQixHQUFHLGdCQUFnQjtNQUNuQyxNQUFNLEdBQUcsRUFBRTs7RUFDZixnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsR0FBRztJQUN4QixNQUFNLEdBQUcsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLElBQUksS0FBSztJQUNuRCxNQUFNLEdBQUcsZ0JBQWdCOztTQUN2QixNQUFNOzs7T0FHVCxlQUFlLEdBQUcsU0FBUztNQUMzQixTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHO01BQy9CLFdBQVcsR0FBRyxTQUFTLENBQUMsT0FBTztNQUMvQixHQUFHLEdBQUcsU0FBUyxDQUFDLENBQUM7O01BQ2pCLEdBQUcsR0FBRyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFBRyxTQUFTLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQUksU0FBUyxDQUFDLENBQUM7O01BQ2pFLEdBQUcsR0FBRyxTQUFTLENBQUMsQ0FBQzs7UUFFZixVQUFVO0dBQ2QsS0FBSztHQUNMLEtBQUs7R0FDTCxLQUFLO0dBQ0wsS0FBSztHQUNMLEtBQUs7R0FDTCxLQUFLO0dBQ0wsS0FBSztHQUNMLEtBQUs7R0FDTCxNQUFNO0dBQ04sS0FBSztHQUNMLEtBQUs7R0FDTCxLQUFLOzs7WUFFRyxHQUFHLElBQUksVUFBVSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQ2pDLEdBQUcsUUFBUSxJQUFJLEdBQUcsV0FBVyxLQUFLLEVBQUUsR0FBRyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
