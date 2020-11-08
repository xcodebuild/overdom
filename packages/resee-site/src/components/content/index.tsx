import { computed, h, ReactiveHandler } from 'resee';
import marked from 'marked';

export default function Content(props: {
    content: ReactiveHandler<string>,
}) {
    const htmlContent = computed(() => {
        return {__html: marked(props.content())};
    });
    return <div>
        <div dangerouslySetInnerHTML={htmlContent}></div>
    </div>;
}
